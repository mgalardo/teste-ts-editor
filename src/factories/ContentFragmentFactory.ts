import { Fragment } from "../domain/Fragment"

export class ContentFragmentFactory {
    private static fragmentTypes: any[] = []
    private static contentFragments: any[] = []

    static register (fragment : any) {
        this.fragmentTypes.push(fragment)
    }

    static getFragmentTypes () {
        return this.fragmentTypes
    }

    static registerContentFragment (contentFragment : any) {
        this.contentFragments.push(contentFragment)
    }

    static getContentFragments () {
        return this.contentFragments
    }
}