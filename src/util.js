import {ToastController, ProgressLoaderController} from "@freshworks/crayons-1/react"

export const toast = ToastController({position:'top-left'});

export const toastCenter = ToastController({position:'top-center'});

export const loaderRoot = ProgressLoaderController();
export const loaderCustom= ProgressLoaderController({
    parent:"#container2"
});
