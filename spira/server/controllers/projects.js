import { db } from "../db.js";
import multer from "multer";
import * as path from 'path'
import * as url from 'url';

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../client/src/images/', 'projectBg'),
    filename: function (req, file, cb) {   
        // null as first argument means no error
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
            // req.file contains information of uploaded file
            // req.body contains information of text fields

            if (err instanceof multer.MulterError) {
                return res.send(err);
            }
            else if (err) {
                return res.send(err);
            }

            console.log("body", req.body)
           
            console.log("title", req.body.project_title)
            console.log("desc", req.body.project_description)

            const uploadedFile = req.file? {fileName: req.file.filename}: {fileName: null};
            


            const q= "INSERT INTO projects (project_title,project_description,project_image) VALUES (?,?,?)"

            db.query(q, [req.body.project_title,req.body.project_description,uploadedFile.fileName], (err, data) => {  
                if (err) throw err;
				   
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
    
}

export const deleteProject = (req, res) => {
    
}