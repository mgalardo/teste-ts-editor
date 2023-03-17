import { ContentFragment } from "../../ContentFragment";

export class Column extends ContentFragment {
    private content : ContentFragment[] = [];

    getSelector () {
        return '.essia-column'
    }

    setContent (contentFragment : ContentFragment) {
        this.content.push(contentFragment)
    }

    getContent () {
        return this.content
    }

    isParent () {
        return true
    }
}