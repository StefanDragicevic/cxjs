import * as Cx from "../../core";
import { OverlayProps } from "./Overlay";

export interface DropdownProps extends OverlayProps {
   // TODO: check if string literals should be used instead
   placement?: Cx.StringProp | Cx.Prop<null>;

   offset?: number;
   matchWidth?: boolean;
   placementOrder?: string;
   constrain?: boolean;
   positioning?: string;
   touchFriendly?: boolean;
   arrow?: boolean;
   pad?: boolean;
   elementExplode?: number;
   screenPadding?: number;
   firstChildDefinesHeight?: boolean;
   firstChildDefinesWidth?: boolean;

   /** The dropdown will be automatically closed if the page is scrolled a certain distance.  */
   closeOnScrollDistance?: number;

   onResolveRelatedElement?(beaconEl: Element, instance: any);
}

export class Dropdown extends Cx.Widget<DropdownProps> {}
