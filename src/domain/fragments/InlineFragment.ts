import { Fragment } from "../Fragment";

export class InlineFragment extends Fragment {
    private content : string = ''

    getSelector () : string {
        return 'b, i, u, s, sup, sub'
    }

    setContent (content : string) {
        this.content = content
    }

    getContent () {
        return this.content
    }
}