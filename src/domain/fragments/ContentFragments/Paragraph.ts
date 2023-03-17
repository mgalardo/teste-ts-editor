import { ContentFragment } from "../ContentFragment";
import { InlineFragment } from "../InlineFragment";

export class Paragraph extends ContentFragment {
    private content : InlineFragment = new InlineFragment();

    getSelector () : string {
        return 'p'
    }

    setContent (content : string) {
        this.content.setContent(content)
    }

    getContent () {
        return this.content.getContent()
    }
}