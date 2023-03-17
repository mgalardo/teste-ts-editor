/**
 * @jest-environment jsdom
 */
import { describe, expect, it } from '@jest/globals';
import { ContentFragmentFactory } from '../../../src/factories/ContentFragmentFactory';
import { ContentFragmentParserUseCase } from '../../../src/usecases/ContentFragmentParserUseCase';
import { Paragraph } from '../../../src/domain/fragments/ContentFragments/Paragraph';
import { Columns } from '../../../src/domain/fragments/ContentFragments/columns/Columns';
import { Column } from '../../../src/domain/fragments/ContentFragments/columns/Column';
const contentFragmentParserUseCase = new ContentFragmentParserUseCase()

 describe ('ContentFragmentParserUseCase', () => {
     it ('parser single paragraph', () => {
        ContentFragmentFactory.register(Paragraph)

        document.body.innerHTML = '<div><p>meu parágrafo</p></div>'
        contentFragmentParserUseCase.parser(document.body.firstElementChild, false)

       expect(ContentFragmentFactory.getContentFragments().length).toEqual(1)
     })

     it ('parser complete fragment', () => {
        ContentFragmentFactory.register(Paragraph)
        ContentFragmentFactory.register(Columns)
        ContentFragmentFactory.register(Column)

        document.body.innerHTML = '<div><div class="essia-columns"><div class="essia-column"><p>meu parágrafo</p></div><div class="essia-column"><p>meu parágrafo 2</p></div></div></div>'
        contentFragmentParserUseCase.parser(document.body.firstElementChild, false)

       expect(ContentFragmentFactory.getContentFragments().length).toEqual(3)
     })
 })