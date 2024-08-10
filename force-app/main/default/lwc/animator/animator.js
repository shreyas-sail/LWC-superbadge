import { LightningElement,wire } from 'lwc';
import IMAGE_URL_FIELD from '@salesforce/schema/ContentDocument.LatestPublishedVersion.VersionDataUrl'; 
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
export default class Animator extends LightningElement {
    //0695g00000JsfLcAAJ
    contentDocImage;
    imageUrl;
     @wire(getRecord, {recordId: '0695g00000JsfLcAAJ', fields: [IMAGE_URL_FIELD] })
   wiredContacts({ error, data }) {
    if (data) {
      this.imageUrl = data.fields.LatestPublishedVersion.value.fields.VersionDataUrl.value;
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.imageUrl = undefined;
    }
  }

    get imageUrl() {
        return getFieldValue(this.contentDocImage.data, IMAGE_URL_FIELD);
    }

    renderedCallback(){
        console.log(this.imageUrl);
    }

}