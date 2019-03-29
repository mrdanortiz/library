import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, map, switchMap } from "rxjs/operators";
import { deliverImages } from "../Actions/inputActions";
import { store } from "../Store/store";
import { actionType } from "./../Actions/actionTypes";

const clientId = "d469b178a398a70d281663ce0430980b4a713a9c55698e535d1ffdc52148167d";
const clientSecret = "64a389fb46d61c985bf2f7672ffe508a29c4ab128fecda17511dc19608df222b";

export const getImagesEpic = action$ =>
    action$.pipe(
        ofType(actionType.GET_IMAGES),
        map(() => store.getState().inputDataReducer.inputFormData),
        switchMap(({ inputBox, checkbox }: { inputBox: string; checkbox: boolean }) =>
            ajax
                .getJSON(
                    `https://api.unsplash.com/search/photos?query=${inputBox}&per_page=${
                        checkbox ? "1" : "4"
                    }&client_id=${clientId}&client_secret=${clientSecret}`
                )
                .pipe(
                    switchMap(res => of(deliverImages(res))),
                    catchError(error => of(console.log("error: ", error)))
                )
        )
    );
