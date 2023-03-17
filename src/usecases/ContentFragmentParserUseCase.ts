import { ContentFragment } from "../domain/fragments/ContentFragment";
import { ContentFragmentFactory } from "../factories/ContentFragmentFactory"

export class ContentFragmentParserUseCase {
    lastParentFragment : ContentFragment | undefined;

    parser (document : any, children : boolean) {
        Array.from(document.children).forEach((c: any) => {
            const FragmentType : any | undefined = ContentFragmentFactory.getFragmentTypes().find((f : any) => c.matches(f.prototype.getSelector()))
            if (FragmentType) {
                const fragment = new FragmentType();
                fragment.setElement(c)
                if (children) {
                    this.lastParentFragment?.setContent(fragment)
                } else {
                    ContentFragmentFactory.registerContentFragment(fragment);
                    this.lastParentFragment = fragment
                }
            }
            this.parser(c, true)
        })
    }
}