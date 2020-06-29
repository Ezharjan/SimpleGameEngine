

/**
 * Validation callback for validating drag node may be dropped into the target.
 */
declare interface DropTargetValidator {
    (dragNode: TreeNode, targetNode: TreeNode): boolean;
}

/**
 * Represents a tree DOM configuration object
 */
declare interface Config {
    autoLoadMore?: boolean;
    deferredRendering?: boolean;
    dragAndDrop?: {
        enabled?: boolean;
        validateOn?: string;
        validate: DropTargetValidator
    };
    nodeHeight?: number;
    showCheckboxes?: boolean;
    dragTargets?: Array<string>;
    tabindex?: number;
    target: HTMLElement;
}

declare class InspireTreeDOM {
    constructor(tree: any, opts: Config);
}

