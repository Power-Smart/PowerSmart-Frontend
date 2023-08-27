import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { removeCustomerProfile } from "../../api/apiUser";
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';
import '@pqina/pintura/pintura.css';
import './register.css'
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css';
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';




registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
    FilePondPluginImageTransform,
    FilePondPluginFilePoster,
    FilePondPluginImageEdit
);


const ProfilePictureUpload = () => {
    const [files, setFiles] = useState([]);

    return (
        <FilePond
            className="filepond"
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={true}
            maxFiles={1}
            server="http://localhost:3002/user/saveProfilePic/17"
            name="profile" /* sets the file input name, it's filepond by default */
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            beforeRemoveFile={(file_deleted) => {
                removeCustomerProfile(file_deleted.filename);
            }}
            imagePreviewHeight={170}
            imageCropAspectRatio="1:1"
            imageResizeTargetWidth={200}
            imageResizeTargetHeight={200}
            stylePanelLayout="compact circle"
            styleLoadIndicatorPosition="center bottom"
            styleButtonRemoveItemPosition="center bottom"
            allowFileTypeValidation={true}
            acceptedFileTypes={['image/png', 'image/jpeg']}
            labelFileTypeNotAllowed='Only PNG and JPEG files are allowed'
            fileValidateTypeLabelExpectedTypesMap={{
                'image/png': '.png',
                'image/jpeg': '.jpeg'
            }}
            imageResizeMode="cover"


            allowImageEdit={true}
            styleImageEditButtonEditItemPosition="center bottom"
            imageEditorInstantEdit={true}
            filePosterMaxHeight={200}


        />
    )
}

export default ProfilePictureUpload