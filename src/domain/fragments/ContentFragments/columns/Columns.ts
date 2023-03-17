import { ContentFragment } from "../../ContentFragment";
import { Column } from "./Column";

export class Columns extends ContentFragment {
    private content : Column[] = []

    getSelector () : string {
        return '.essia-columns'
    }

    setContent (column : Column) {
        this.content.push(column)
    }

    getContent () {
        return this.content
    }
}