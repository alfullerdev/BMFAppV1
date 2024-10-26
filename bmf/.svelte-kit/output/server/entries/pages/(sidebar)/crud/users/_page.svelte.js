import { c as create_ssr_component, a as compute_rest_props, o as createEventDispatcher, f as add_attribute, h as escape, v as validate_component, j as compute_slots, g as getContext, b as spread, e as escape_attribute_value, d as escape_object, k as each } from "../../../../../chunks/ssr.js";
import { T as ToolbarButton } from "../../../../../chunks/ToolbarButton.js";
import { A as Avatar, I as Indicator } from "../../../../../chunks/Avatar.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../../chunks/BreadcrumbItem.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { L as Label, C as Checkbox } from "../../../../../chunks/Checkbox.js";
import { C as CloseButton, I as Input } from "../../../../../chunks/Input.js";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../../chunks/TableHeadCell.js";
import { T as Textarea, a as Toolbar, D as DotsVerticalOutline } from "../../../../../chunks/DotsVerticalOutline.js";
import { H as Heading } from "../../../../../chunks/Heading.js";
import { C as CogSolid, T as TrashBinSolid, E as ExclamationCircleSolid, a as EditOutline } from "../../../../../chunks/TrashBinSolid.js";
import { D as DownloadSolid } from "../../../../../chunks/DownloadSolid.js";
import { twMerge } from "tailwind-merge";
import { U as Users } from "../../../../../chunks/users.js";
import { i as imagesPath } from "../../../../../chunks/variables.js";
import { F as Frame } from "../../../../../chunks/Frame.js";
import { M as MetaTag } from "../../../../../chunks/MetaTag.js";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let backdropCls;
  let dialogCls;
  let frameCls;
  let headerCls;
  let bodyCls;
  let footerCls;
  let $$restProps = compute_rest_props($$props, [
    "open",
    "title",
    "size",
    "color",
    "placement",
    "autoclose",
    "outsideclose",
    "dismissable",
    "backdropClass",
    "classBackdrop",
    "dialogClass",
    "classDialog",
    "defaultClass",
    "headerClass",
    "classHeader",
    "bodyClass",
    "classBody",
    "footerClass",
    "classFooter"
  ]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { title: title2 = "" } = $$props;
  let { size = "md" } = $$props;
  let { color = "default" } = $$props;
  let { placement = "center" } = $$props;
  let { autoclose = false } = $$props;
  let { outsideclose = false } = $$props;
  let { dismissable = true } = $$props;
  let { backdropClass = "fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80" } = $$props;
  let { classBackdrop = void 0 } = $$props;
  let { dialogClass = "fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex" } = $$props;
  let { classDialog = void 0 } = $$props;
  let { defaultClass = "relative flex flex-col mx-auto" } = $$props;
  let { headerClass = "flex justify-between items-center p-4 md:p-5 rounded-t-lg" } = $$props;
  let { classHeader = void 0 } = $$props;
  let { bodyClass = "p-4 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain" } = $$props;
  let { classBody = void 0 } = $$props;
  let { footerClass = "flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse rounded-b-lg" } = $$props;
  let { classFooter = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  const getPlacementClasses = (placement2) => {
    switch (placement2) {
      case "top-left":
        return ["justify-start", "items-start"];
      case "top-center":
        return ["justify-center", "items-start"];
      case "top-right":
        return ["justify-end", "items-start"];
      case "center-left":
        return ["justify-start", "items-center"];
      case "center":
        return ["justify-center", "items-center"];
      case "center-right":
        return ["justify-end", "items-center"];
      case "bottom-left":
        return ["justify-start", "items-end"];
      case "bottom-center":
        return ["justify-center", "items-end"];
      case "bottom-right":
        return ["justify-end", "items-end"];
      default:
        return ["justify-center", "items-center"];
    }
  };
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  if ($$props.autoclose === void 0 && $$bindings.autoclose && autoclose !== void 0) $$bindings.autoclose(autoclose);
  if ($$props.outsideclose === void 0 && $$bindings.outsideclose && outsideclose !== void 0) $$bindings.outsideclose(outsideclose);
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0) $$bindings.dismissable(dismissable);
  if ($$props.backdropClass === void 0 && $$bindings.backdropClass && backdropClass !== void 0) $$bindings.backdropClass(backdropClass);
  if ($$props.classBackdrop === void 0 && $$bindings.classBackdrop && classBackdrop !== void 0) $$bindings.classBackdrop(classBackdrop);
  if ($$props.dialogClass === void 0 && $$bindings.dialogClass && dialogClass !== void 0) $$bindings.dialogClass(dialogClass);
  if ($$props.classDialog === void 0 && $$bindings.classDialog && classDialog !== void 0) $$bindings.classDialog(classDialog);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.headerClass === void 0 && $$bindings.headerClass && headerClass !== void 0) $$bindings.headerClass(headerClass);
  if ($$props.classHeader === void 0 && $$bindings.classHeader && classHeader !== void 0) $$bindings.classHeader(classHeader);
  if ($$props.bodyClass === void 0 && $$bindings.bodyClass && bodyClass !== void 0) $$bindings.bodyClass(bodyClass);
  if ($$props.classBody === void 0 && $$bindings.classBody && classBody !== void 0) $$bindings.classBody(classBody);
  if ($$props.footerClass === void 0 && $$bindings.footerClass && footerClass !== void 0) $$bindings.footerClass(footerClass);
  if ($$props.classFooter === void 0 && $$bindings.classFooter && classFooter !== void 0) $$bindings.classFooter(classFooter);
  {
    dispatch(open ? "open" : "close");
  }
  backdropCls = twMerge(backdropClass, classBackdrop);
  dialogCls = twMerge(dialogClass, classDialog, getPlacementClasses(placement));
  frameCls = twMerge(defaultClass, "w-full divide-y", $$props.class);
  headerCls = twMerge(headerClass, classHeader);
  bodyCls = twMerge(bodyClass, classBody);
  footerCls = twMerge(footerClass, classFooter);
  return `${open ? ` <div${add_attribute("class", backdropCls, 0)}></div>   <div${add_attribute("class", dialogCls, 0)} tabindex="-1" aria-modal="true" role="dialog"><div class="${"flex relative " + escape(sizes[size], true) + " w-full max-h-full"}"> ${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { rounded: true }, { shadow: true }, $$restProps, { class: frameCls }, { color }), {}, {
    default: () => {
      return ` ${$$slots.header || title2 ? `${validate_component(Frame, "Frame").$$render($$result, { class: headerCls, color }, {}, {
        default: () => {
          return `${slots.header ? slots.header({}) : ` <h3 class="${"text-xl font-semibold " + escape(
            color === "default" ? "" : "text-gray-900 dark:text-white",
            true
          ) + " p-0"}">${escape(title2)}</h3> `} ${dismissable ? `${validate_component(CloseButton, "CloseButton").$$render($$result, { name: "Close modal", color }, {}, {})}` : ``}`;
        }
      })}` : ``}  <div${add_attribute("class", bodyCls, 0)} role="document">${dismissable && !$$slots.header && !title2 ? `${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          name: "Close modal",
          class: "absolute top-3 end-2.5",
          color
        },
        {},
        {}
      )}` : ``} ${slots.default ? slots.default({}) : ``}</div>  ${$$slots.footer ? `${validate_component(Frame, "Frame").$$render($$result, { class: footerCls, color }, {}, {
        default: () => {
          return `${slots.footer ? slots.footer({}) : ``}`;
        }
      })}` : ``}`;
    }
  })}</div></div>` : ``} `;
});
const ExclamationCircleOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title: title2 = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title2.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "exclamation circle outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title2.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>`} `;
});
const PlusOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title: title2 = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title2.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "plus outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title2.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M5 12h14m-7 7V5"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M5 12h14m-7 7V5"></path></svg>`} `;
});
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { data = {} } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: Object.keys(data).length ? "Edit user" : "Add new user",
        size: "md",
        class: "m-4",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `<div slot="footer">${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
            default: () => {
              return `${escape(Object.keys(data).length ? "Save all" : "Add user")}`;
            }
          })}</div>`;
        },
        default: () => {
          return ` <div class="space-y-6 p-0"><form action="#"><div class="grid grid-cols-6 gap-6">${validate_component(Label, "Label").$$render(
            $$result,
            {
              class: "col-span-6 space-y-2 sm:col-span-3"
            },
            {},
            {
              default: () => {
                return `<span data-svelte-h="svelte-1nmk7y7">First Name</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "first_name",
                    class: "border outline-none",
                    placeholder: "e.g. Bonnie",
                    required: true
                  },
                  {},
                  {}
                )}`;
              }
            }
          )} ${validate_component(Label, "Label").$$render(
            $$result,
            {
              class: "col-span-6 space-y-2 sm:col-span-3"
            },
            {},
            {
              default: () => {
                return `<span data-svelte-h="svelte-cjy9jj">Last Name</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "last_name",
                    class: "border outline-none",
                    placeholder: "e.g. Green",
                    required: true
                  },
                  {},
                  {}
                )}`;
              }
            }
          )} ${validate_component(Label, "Label").$$render(
            $$result,
            {
              class: "col-span-6 space-y-2 sm:col-span-3"
            },
            {},
            {
              default: () => {
                return `<span data-svelte-h="svelte-1bg9cgq">Email</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "email",
                    type: "email",
                    class: "border outline-none",
                    placeholder: "e.g. bonnie@flowbite.com"
                  },
                  {},
                  {}
                )}`;
              }
            }
          )} ${validate_component(Label, "Label").$$render(
            $$result,
            {
              class: "col-span-6 space-y-2 sm:col-span-3"
            },
            {},
            {
              default: () => {
                return `<span data-svelte-h="svelte-1d9pcsl">Position</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "position",
                    class: "border outline-none",
                    placeholder: "e.g. React Developer",
                    required: true
                  },
                  {},
                  {}
                )}`;
              }
            }
          )} ${validate_component(Label, "Label").$$render(
            $$result,
            {
              class: "col-span-6 space-y-2 sm:col-span-3"
            },
            {},
            {
              default: () => {
                return `<span data-svelte-h="svelte-2w154s">Current Password</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "current-password",
                    type: "password",
                    class: "border outline-none",
                    placeholder: "••••••••",
                    required: true
                  },
                  {},
                  {}
                )}`;
              }
            }
          )} ${validate_component(Label, "Label").$$render(
            $$result,
            {
              class: "col-span-6 space-y-2 sm:col-span-3"
            },
            {},
            {
              default: () => {
                return `<span data-svelte-h="svelte-18iafh">New Password</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    name: "news-password",
                    type: "password",
                    class: "border outline-none",
                    placeholder: "••••••••",
                    required: true
                  },
                  {},
                  {}
                )}`;
              }
            }
          )} ${validate_component(Label, "Label").$$render($$result, { class: "col-span-6 space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-hboket">Biography</span> ${validate_component(Textarea, "Textarea").$$render(
                $$result,
                {
                  id: "biography",
                  rows: 4,
                  class: "bg-gray-50 outline-none dark:bg-gray-700",
                  placeholder: "👨‍💻Full-stack web developer. Open-source contributor."
                },
                {},
                {
                  default: () => {
                    return `👨‍💻Full-stack web developer. Open-source contributor.`;
                  }
                }
              )}`;
            }
          })}</div></form></div> `;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Delete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      { size: "sm", open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ExclamationCircleOutline, "ExclamationCircleOutline").$$render(
            $$result,
            {
              class: "mx-auto mb-4 mt-8 h-10 w-10 text-red-600"
            },
            {},
            {}
          )} <h3 class="mb-6 text-center text-lg text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1sk16nk">Are you sure you want to delete this product?</h3> <div class="flex items-center justify-center">${validate_component(Button, "Button").$$render($$result, { href: "/", color: "red", class: "mr-2" }, {}, {
            default: () => {
              return `Yes, I&#39;m sure`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
            default: () => {
              return `No, cancel`;
            }
          })}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const path = "/crud/users";
const description = "CRUD users examaple - Flowbite Svelte Admin Dashboard";
const title = "Flowbite Svelte Admin Dashboard - CRUD Users";
const subtitle = "CRUD Users";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let openUser = false;
  let openDelete = false;
  let current_user = {};
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} <main class="relative h-full w-full overflow-y-auto bg-white dark:bg-gray-800"><div class="p-4">${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { class: "mb-5" }, {}, {
      default: () => {
        return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { home: true }, {}, {
          default: () => {
            return `Home`;
          }
        })} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/crud/users" }, {}, {
          default: () => {
            return `Users`;
          }
        })} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
          default: () => {
            return `List`;
          }
        })}`;
      }
    })} ${validate_component(Heading, "Heading").$$render(
      $$result,
      {
        tag: "h1",
        class: "text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl"
      },
      {},
      {
        default: () => {
          return `All users`;
        }
      }
    )} ${validate_component(Toolbar, "Toolbar").$$render(
      $$result,
      {
        embedded: true,
        class: "w-full py-4 text-gray-500  dark:text-gray-400"
      },
      {},
      {
        end: () => {
          return `<div slot="end" class="flex items-center space-x-2">${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "sm",
              class: "gap-2 whitespace-nowrap px-3"
            },
            {},
            {
              default: () => {
                return `${validate_component(PlusOutline, "PlusOutline").$$render($$result, { size: "sm" }, {}, {})}Add user`;
              }
            }
          )} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              size: "sm",
              color: "alternative",
              class: "gap-2 px-3"
            },
            {},
            {
              default: () => {
                return `${validate_component(DownloadSolid, "DownloadSolid").$$render($$result, { size: "md", class: "-ml-1" }, {}, {})}Export`;
              }
            }
          )}</div>`;
        },
        default: () => {
          return `${validate_component(Input, "Input").$$render(
            $$result,
            {
              placeholder: "Search for users",
              class: "me-4 w-80 border xl:w-96"
            },
            {},
            {}
          )} <div class="border-l border-gray-100 pl-2 dark:border-gray-700">${validate_component(ToolbarButton, "ToolbarButton").$$render(
            $$result,
            {
              color: "dark",
              class: "m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
            },
            {},
            {
              default: () => {
                return `${validate_component(CogSolid, "CogSolid").$$render($$result, { size: "lg" }, {}, {})}`;
              }
            }
          )} ${validate_component(ToolbarButton, "ToolbarButton").$$render(
            $$result,
            {
              color: "dark",
              class: "m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
            },
            {},
            {
              default: () => {
                return `${validate_component(TrashBinSolid, "TrashBinSolid").$$render($$result, { size: "lg" }, {}, {})}`;
              }
            }
          )} ${validate_component(ToolbarButton, "ToolbarButton").$$render(
            $$result,
            {
              color: "dark",
              class: "m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
            },
            {},
            {
              default: () => {
                return `${validate_component(ExclamationCircleSolid, "ExclamationCircleSolid").$$render($$result, { size: "lg" }, {}, {})}`;
              }
            }
          )} ${validate_component(ToolbarButton, "ToolbarButton").$$render(
            $$result,
            {
              color: "dark",
              class: "m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
            },
            {},
            {
              default: () => {
                return `${validate_component(DotsVerticalOutline, "DotsVerticalOutline").$$render($$result, { size: "lg" }, {}, {})}`;
              }
            }
          )}</div>`;
        }
      }
    )}</div> ${validate_component(Table, "Table").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(TableHead, "TableHead").$$render(
          $$result,
          {
            class: "border-y border-gray-200 bg-gray-100 dark:border-gray-700"
          },
          {},
          {
            default: () => {
              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-4 p-4" }, {}, {
                default: () => {
                  return `${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {})}`;
                }
              })} ${each(["Name", "Biography", "Position", "Country", "Status", "Actions"], (title2) => {
                return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "p-4 font-medium" }, {}, {
                  default: () => {
                    return `${escape(title2)}`;
                  }
                })}`;
              })}`;
            }
          }
        )} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
          default: () => {
            return `${each(Users, (user) => {
              return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, { class: "text-base" }, {}, {
                default: () => {
                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "w-4 p-4" }, {}, {
                    default: () => {
                      return `${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {})}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                    $$result,
                    {
                      class: "mr-12 flex items-center space-x-6 whitespace-nowrap p-4"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Avatar, "Avatar").$$render($$result, { src: imagesPath(user.avatar, "users") }, {}, {})} <div class="text-sm font-normal text-gray-500 dark:text-gray-400"><div class="text-base font-semibold text-gray-900 dark:text-white">${escape(user.name)}</div> <div class="text-sm font-normal text-gray-500 dark:text-gray-400">${escape(user.email)}</div></div> `;
                      }
                    }
                  )} ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                    $$result,
                    {
                      class: "max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs"
                    },
                    {},
                    {
                      default: () => {
                        return `${escape(user.biography)} `;
                      }
                    }
                  )} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `${escape(user.position)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "p-4" }, {}, {
                    default: () => {
                      return `${escape(user.country)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "p-4 font-normal" }, {}, {
                    default: () => {
                      return `<div class="flex items-center gap-2">${validate_component(Indicator, "Indicator").$$render(
                        $$result,
                        {
                          color: user.status === "Active" ? "green" : "red"
                        },
                        {},
                        {}
                      )} ${escape(user.status)}</div> `;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "space-x-2 p-4" }, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render($$result, { size: "sm", class: "gap-2 px-3" }, {}, {
                        default: () => {
                          return `${validate_component(EditOutline, "EditOutline").$$render($$result, { size: "sm" }, {}, {})} Edit user
						`;
                        }
                      })} ${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          color: "red",
                          size: "sm",
                          class: "gap-2 px-3"
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(TrashBinSolid, "TrashBinSolid").$$render($$result, { size: "sm" }, {}, {})} Delete user
						`;
                          }
                        }
                      )} `;
                    }
                  })} `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}</main>  ${validate_component(User, "User").$$render(
      $$result,
      { data: current_user, open: openUser },
      {
        open: ($$value) => {
          openUser = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Delete, "Delete").$$render(
      $$result,
      { open: openDelete },
      {
        open: ($$value) => {
          openDelete = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
