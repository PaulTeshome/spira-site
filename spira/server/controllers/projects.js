import { db } from "../db.js";
import multer from "multer";
import * as path from 'path';
import * as url from 'url';
import { unlink } from 'fs/promises';

    
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../client/src/images/', 'projectBg'),
    filename: function (req, file, cb) {   
        cb(null, Date.now() + '-' + file.originalname )  
    }
    })

export const getProjects = (req, res) => {
    const q= "select * from projects"

    db.query(q, (err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
}

export const addProject = (req, res) => {
    try {
        let upload = multer({ storage: storage}).single('project_image');

        upload(req, res, function(err) {

            if (err instanceof multer.MulterError) {
                return res.send(err);
            }
            else if (err) {
                return res.send(err);
            }

            const uploadedFile = req.file? {fileName: req.file.filename}: {fileName: null};
            

            const q= "INSERT INTO projects (project_title,project_description,project_image) VALUES (?,?,?)"

            db.query(q, [req.body.project_title,req.body.project_description,uploadedFile.fileName], (err, data) => {  
                 
                if (err) {
                    console.log(err)
                    res.status(500).json({ error: 'Failed to insert value in database. Please try again.' })
                }else {
                    res.json(data)
                }
			});  

        }); 

    }catch (err) {console.log(err)}
    
}

export const updateProject = (req, res) => {
    try {
        let upload = multer({ storage: storage}).single('project_image');

        upload(req, res, function(err) {

            if (err instanceof multer.MulterError) {
                return res.send(err);
            }
            else if (err) {
                return res.send(err);
            }

            const uploadedFile = req.file? {fileName: req.file.filename}: {fileName: null};

                const filename = req.body.old_image;
                const directoryPath = '../../client/src/images/projectBg/';
                
                const filePath = path.join(__dirname,directoryPath, filename);
                
                unlink(filePath)
                  .then(() => {
                    console.log('File deleted successfully');
                  })
                  .catch((err) => {
                    console.error(err);
                  });
        
            
            const q= "UPDATE projects SET project_title=?, project_description=? ,project_image=? WHERE project_id=?"

            db.query(q, [req.body.project_title,req.body.project_description,uploadedFile.fileName,req.body.project_id], (err, data) => {  
                 
                if (err) {
                    console.log(err)
                    res.status(500).json({ error: 'Failed to update value in database. Please try again.' })
                }else {
                    res.json(data)
                }
			});  

        }); 

    }catch (err) {console.log(err)}
    
    
}

export const deleteProject = (req, res) => {

    const q= " DELETE FROM projects WHERE project_id=?"
    db.query(q,[req.body.project_id], (err,data) => {

        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Failed to delete project in database. Please try again.' })
        }else {
                const filename = req.body.old_image;
                const directoryPath = '../../client/src/images/projectBg/';
                const filePath = path.join(__dirname,directoryPath, filename);
                
                unlink(filePath)
                  .then(() => {
                    console.log('File deleted successfully');
                  })
                  .catch((err) => {
                    console.error(err);
                  });

            res.json(data)
        }
    });
}