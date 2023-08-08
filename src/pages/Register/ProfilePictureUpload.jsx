import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { removeCustomerProfile } from "../../api/apiUser";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


const ProfilePictureUpload = () => {
    const [files, setFiles] = useState([]);

    return (
        <FilePond
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={true}
            maxFiles={3}
            server="http://localhost:3002/user/saveProfilePic/17"
            name="profile" /* sets the file input name, it's filepond by default */
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            beforeRemoveFile={(file_deleted) => {
                removeCustomerProfile(file_deleted.filename);
            }}
        />
    )
}

export default ProfilePictureUpload