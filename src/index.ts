import { ContentFragmentFactory } from "./factories/ContentFragmentFactory";
import { InlineFragment } from "./domain/fragments/InlineFragment";
import { Paragraph } from "./domain/fragments/ContentFragments/Paragraph";

ContentFragmentFactory.register(Paragraph)
ContentFragmentFactory.register(InlineFragment)

console.log(ContentFragmentFactory.getFragmentTypes())