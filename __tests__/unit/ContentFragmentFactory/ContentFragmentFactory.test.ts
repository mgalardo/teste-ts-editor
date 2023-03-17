/**
 * @jest-environment jsdom
 */
import { describe, expect, it } from '@jest/globals';
import { ContentFragmentFactory } from '../../../src/factories/ContentFragmentFactory';
import { InlineFragment } from '../../../src/domain/fragments/InlineFragment';
import { Paragraph } from '../../../src/domain/fragments/ContentFragments/Paragraph';

 describe ('ContentFragmentFactory', () => {
     it ('register', () => {
        ContentFragmentFactory.register(Paragraph)
        ContentFragmentFactory.register(InlineFragment)

       expect(ContentFragmentFactory.getFragmentTypes().length).toEqual(2)
     })
 })