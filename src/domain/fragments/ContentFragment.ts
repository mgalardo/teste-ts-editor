import { Fragment } from "../Fragment";

export abstract class ContentFragment extends Fragment {
    abstract setContent (contentFragment : any) : void;
    isValid () : boolean {
        return this.getElement() ? true : false
    }
}