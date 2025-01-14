# Changelog

<!--- ## Unreleased -->

## `cx@22.9.0`

**Fixes**

-  Add text ellipsis to all form fields
-  Fix problems with datetime field dropdowns

## `cx@22.8.2`

**Fixes**

-  Various typing improvements

## `cx@22.8.0`

**Fixes**

-  Allow onContextMenu on all HTML elements in TypeScript
-  Properly handle context menus within windows and dropdowns
-  Allow get/set props in TypeScript
-  Allow accessor chains for the Sandbox.storage prop
-  Orient vertical Sliders to be bottom up, instead of top to bottom with the invert flag to control the behavior

## `cx@22.7.1`

**Fixes**

-  Render overlay backdrop before the body and allow propagation of `mousedown` event to to allow integration of other libraries (i.e. prosemirror) which catch events on the document level.

## `cx@22.7.0`

**New Features**

-  TreeAdapter now supports preserving expanded state through a flag `restoreExpandedNodesOnLoad`
-  Added an example for stateful tree grids

## `cx@22.6.3`

**New Features**

-  TreeAdapter now support the flag `hideRootNodes`
-  Added the function `findTreePath` to `cx/data`.

**Fixes**

-  Typings for MenuItem
-  Typings for PieSlice
-  Skip focusing disabled LookupField options
-  Typings for Window

## `cx@22.6.0`

**Fixes**

-  Fix for onCellEdited firing twice (#982)
-  Fix for grid cell editing not working in the first column (#980)
-  Allow accessor chains for `value` and `text` props in lookup fields

## `cx@22.5.3`

-  Allow tooltips in grid headers (#977)

## `cx@22.5.2`

-  Fix MenuItem typing

## `cx@22.5.1`

**Fixes**

-  Fix typings for the `Repeater` widget

## `cx@22.5.0`

**Fixes**

-  Fix bugs related to `startWithMonday` in `Calendar` widgets
-  Typing improvements
-  Fix detection of touch events inside modal windows
