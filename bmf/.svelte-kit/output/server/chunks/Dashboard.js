import { p as identity, c as create_ssr_component, a as compute_rest_props, o as createEventDispatcher, b as spread, d as escape_object, e as escape_attribute_value, f as add_attribute, v as validate_component, h as escape, g as getContext, s as subscribe, k as each, l as setContext } from "./ssr.js";
import { twMerge } from "tailwind-merge";
import { C as Card } from "./Card.js";
import { H as Heading } from "./Heading.js";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat.js";
import { C as ChevronDownOutline, D as Dropdown, b as DropdownItem, a as Popover } from "./ChevronDownOutline.js";
import { I as Indicator, A as Avatar } from "./Avatar.js";
import { w as writable } from "./index2.js";
import { U as Users } from "./users.js";
import { i as imagesPath } from "./variables.js";
import { B as Button } from "./Button.js";
import { T as ToolbarButton } from "./ToolbarButton.js";
import { T as Textarea, a as Toolbar, D as DotsVerticalOutline } from "./DotsVerticalOutline.js";
import { C as CloseButton, I as Input } from "./Input.js";
import { C as CheckOutline } from "./CheckOutline.js";
import { L as LayersSolid } from "./LayersSolid.js";
import { D as DesktopPcOutline, M as MobilePhoneOutline } from "./MobilePhoneOutline.js";
import { C as Checkbox } from "./Checkbox.js";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "./TableHeadCell.js";
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const baseClass = "font-medium inline-flex items-center justify-center px-2.5 py-0.5";
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "large", "dismissable", "border", "href", "rounded", "transition", "params"]);
  createEventDispatcher();
  let { color = "primary" } = $$props;
  let { large = false } = $$props;
  let { dismissable = false } = $$props;
  let { border = false } = $$props;
  let { href = "" } = $$props;
  let { rounded = false } = $$props;
  let { transition = fade } = $$props;
  let { params = {} } = $$props;
  let badgeStatus = true;
  const colors = {
    primary: "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300",
    dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    pink: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    none: ""
  };
  const borderedColors = {
    primary: "bg-primary-100 text-primary-800 dark:bg-gray-700 dark:text-primary-400 border-primary-400 dark:border-primary-400",
    dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-400 dark:border-gray-400",
    blue: "bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border-blue-400 dark:border-blue-400",
    red: "bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border-red-400 dark:border-red-400",
    green: "bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-400 dark:border-green-400",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-300",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400 dark:border-indigo-400",
    purple: "bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border-purple-400 dark:border-purple-400",
    pink: "bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400 dark:border-pink-400",
    none: ""
  };
  const hoverColors = {
    primary: "hover:bg-primary-200",
    dark: "hover:bg-gray-200",
    blue: "hover:bg-blue-200",
    red: "hover:bg-red-200",
    green: "hover:bg-green-200",
    yellow: "hover:bg-yellow-200",
    indigo: "hover:bg-indigo-200",
    purple: "hover:bg-purple-200",
    pink: "hover:bg-pink-200",
    none: ""
  };
  const close = () => {
    badgeStatus = false;
  };
  let badgeClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0) $$bindings.large(large);
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0) $$bindings.dismissable(dismissable);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0) $$bindings.params(params);
  badgeClass = twMerge(
    baseClass,
    large ? "text-sm" : "text-xs",
    border ? `border ${borderedColors[color]}` : colors[color],
    href && hoverColors[color],
    rounded ? "rounded-full" : "rounded",
    $$restProps.class
  );
  return `${badgeStatus ? `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(badgeClass)
      }
    ],
    {}
  )}>${href ? `<a${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `${slots.default ? slots.default({}) : ``}`} ${dismissable ? `${slots["close-button"] ? slots["close-button"]({ close }) : ` ${validate_component(CloseButton, "CloseButton").$$render(
    $$result,
    {
      divclass: "ms-1.5 -me-1.5",
      color,
      size: large ? "sm" : "xs",
      ariaLabel: "Remove badge"
    },
    {},
    {}
  )} `}` : ``}</div>` : ``} `;
});
const ControlButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { forward } = $$props;
  let { name } = $$props;
  let buttonCls;
  if ($$props.forward === void 0 && $$bindings.forward && forward !== void 0) $$bindings.forward(forward);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  buttonCls = twMerge("flex absolute top-0 z-30 justify-center items-center px-4 h-full group focus:outline-none text-white dark:text-gray-300", forward ? "end-0" : "start-0", $$props.class);
  return `<button type="button"${add_attribute("class", buttonCls, 0)}>${slots.default ? slots.default({}) : ` <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">${forward ? `<svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>` : `<svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>`} <span class="sr-only">${escape(name)}</span></span> `}</button> `;
});
const canChangeSlide = ({ lastSlideChange, slideDuration, slideDurationRatio = 1 }) => {
  if (lastSlideChange && (/* @__PURE__ */ new Date()).getTime() - lastSlideChange.getTime() < slideDuration * slideDurationRatio) {
    console.warn("Can't change slide yet, too soon");
    return false;
  }
  return true;
};
const Controls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  const { update } = state;
  function changeSlide(forward) {
    if (!canChangeSlide({
      lastSlideChange: $state.lastSlideChange,
      slideDuration: $state.slideDuration,
      slideDurationRatio: 0.75
    })) {
      return;
    }
    if (forward) {
      update((_state) => {
        _state.forward = true;
        _state.index = _state.index >= _state.images.length - 1 ? 0 : _state.index + 1;
        _state.lastSlideChange = /* @__PURE__ */ new Date();
        return { ..._state };
      });
    } else {
      update((_state) => {
        _state.forward = false;
        _state.index = _state.index <= 0 ? _state.images.length - 1 : _state.index - 1;
        _state.lastSlideChange = /* @__PURE__ */ new Date();
        return { ..._state };
      });
    }
  }
  $$unsubscribe_state();
  return ` ${slots.default ? slots.default({ ControlButton, changeSlide }) : ` ${validate_component(ControlButton, "ControlButton").$$render(
    $$result,
    {
      name: "Previous",
      forward: false,
      class: twMerge($$props.class)
    },
    {},
    {}
  )} ${validate_component(ControlButton, "ControlButton").$$render(
    $$result,
    {
      name: "Next",
      forward: true,
      class: twMerge($$props.class)
    },
    {},
    {}
  )} `}`;
});
const Indicators = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  let { activeClass = "opacity-100" } = $$props;
  let { inactiveClass = "opacity-60" } = $$props;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0) $$bindings.inactiveClass(inactiveClass);
  $$unsubscribe_state();
  return `<div${add_attribute("class", twMerge("flex absolute bottom-5 start-1/2 z-30 space-x-3 rtl:space-x-reverse -translate-x-1/2 rtl:translate-x-1/2", $$props.class), 0)}>${each($state.images, (_, idx) => {
    let selected = $state.index === idx;
    return ` <button>${slots.default ? slots.default({ Indicator, selected, index: idx }) : ` ${validate_component(Indicator, "Indicator").$$render(
      $$result,
      {
        class: twMerge("bg-gray-100 hover:bg-gray-300", selected ? activeClass : inactiveClass)
      },
      {},
      {}
    )} `} </button>`;
  })}</div> `;
});
const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let imgClass;
  let $$restProps = compute_rest_props($$props, ["image", "transition"]);
  let $state, $$unsubscribe_state;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let { image } = $$props;
  let { transition = null } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  ({
    x: $state.forward ? "100%" : "-100%",
    opacity: 1,
    width: "100%",
    height: "100%",
    duration: $state.slideDuration
  });
  ({
    x: $state.forward ? "-100%" : "100%",
    opacity: 0.9,
    width: "100%",
    height: "100%",
    duration: $state.slideDuration
  });
  imgClass = twMerge("absolute block !w-full h-full object-cover", $$props.class);
  $$unsubscribe_state();
  return `${transition ? `<img${spread(
    [
      { alt: "..." },
      escape_object(image),
      escape_object($$restProps),
      { class: escape_attribute_value(imgClass) }
    ],
    {}
  )}>` : `<img${spread(
    [
      { alt: "..." },
      escape_object(image),
      escape_object($$restProps),
      { class: escape_attribute_value(imgClass) }
    ],
    {}
  )}>`} `;
});
let divClass = "grid overflow-hidden relative rounded-lg h-56 sm:h-64 xl:h-80 2xl:h-96";
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "images",
    "index",
    "slideDuration",
    "transition",
    "duration",
    "ariaLabel",
    "disableSwipe",
    "imgClass"
  ]);
  let { images } = $$props;
  let { index = 0 } = $$props;
  let { slideDuration = 1e3 } = $$props;
  let { transition = null } = $$props;
  let { duration = 0 } = $$props;
  let { ariaLabel = "Draggable Carousel" } = $$props;
  let { disableSwipe = false } = $$props;
  let { imgClass = "" } = $$props;
  const dispatch = createEventDispatcher();
  const { set, subscribe: subscribe2, update } = writable({
    images,
    index,
    forward: true,
    slideDuration,
    lastSlideChange: /* @__PURE__ */ new Date()
  });
  const state = {
    set: (_state) => set({
      index: _state.index,
      images: _state.images,
      lastSlideChange: /* @__PURE__ */ new Date(),
      slideDuration,
      forward
    }),
    subscribe: subscribe2,
    update
  };
  let forward = true;
  setContext("state", state);
  subscribe2((_state) => {
    index = _state.index;
    forward = _state.forward;
    dispatch("change", images[index]);
  });
  let carouselDiv;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0) $$bindings.images(images);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.slideDuration === void 0 && $$bindings.slideDuration && slideDuration !== void 0) $$bindings.slideDuration(slideDuration);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  if ($$props.disableSwipe === void 0 && $$bindings.disableSwipe && disableSwipe !== void 0) $$bindings.disableSwipe(disableSwipe);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0) $$bindings.imgClass(imgClass);
  return ` ${$$result.head += `<!-- HEAD_svelte-h5oyes_START -->${images.length > 0 ? `${each(images, (image) => {
    return `<link rel="preload"${add_attribute("href", image.src, 0)} as="image">`;
  })}` : ``}<!-- HEAD_svelte-h5oyes_END -->`, ""}   <div class="relative" role="button"${add_attribute("aria-label", ariaLabel, 0)} tabindex="0"${add_attribute("this", carouselDiv, 0)}><div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(
          divClass,
          "transition-transform",
          $$props.class
        ))
      }
    ],
    {}
  )}>${slots.slide ? slots.slide({ Slide, index }) : ` ${validate_component(Slide, "Slide").$$render(
    $$result,
    {
      image: images[index],
      class: imgClass,
      transition
    },
    {},
    {}
  )} `}</div> ${slots.default ? slots.default({ index, Controls, Indicators }) : ``}</div> `;
});
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options: options2 } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options2 !== void 0) $$bindings.options(options2);
  return `<div${add_attribute("class", $$props.class, 0)}></div> `;
});
const TabItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "title", "activeClasses", "inactiveClasses", "defaultClass", "divClass"]);
  let { open = false } = $$props;
  let { title = "Tab title" } = $$props;
  let { activeClasses = void 0 } = $$props;
  let { inactiveClasses = void 0 } = $$props;
  let { defaultClass = "inline-block text-sm font-medium text-center disabled:cursor-not-allowed" } = $$props;
  let { divClass: divClass2 = "" } = $$props;
  const ctx = getContext("ctx") ?? {};
  ctx.selected ?? writable();
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0) $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0) $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass2 !== void 0) $$bindings.divClass(divClass2);
  buttonClass = twMerge(
    defaultClass,
    open ? activeClasses ?? ctx.activeClasses : inactiveClasses ?? ctx.inactiveClasses,
    open && "active"
  );
  return `<li${add_attribute("class", twMerge("group", $$props.class), 0)} role="presentation"><button${spread(
    [
      { type: "button" },
      { role: "tab" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      }
    ],
    {}
  )}>${slots.title ? slots.title({}) : `${escape(title)}`}</button> ${open ? `<div class="hidden tab_content_placeholder"><div${add_attribute("class", divClass2, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : ``}</li> `;
});
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ulClass;
  let $$restProps = compute_rest_props($$props, [
    "tabStyle",
    "defaultClass",
    "contentClass",
    "divider",
    "activeClasses",
    "inactiveClasses"
  ]);
  let { tabStyle = "none" } = $$props;
  let { defaultClass = "flex flex-wrap space-x-2 rtl:space-x-reverse" } = $$props;
  let { contentClass = "p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4" } = $$props;
  let { divider = true } = $$props;
  let { activeClasses = "p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500" } = $$props;
  let { inactiveClasses = "p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300" } = $$props;
  const styledActiveClasses = {
    full: "p-4 w-full group-first:rounded-s-lg group-last:rounded-e-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:bg-gray-700 dark:text-white",
    pill: "py-3 px-4 text-white bg-primary-600 rounded-lg",
    underline: "p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500",
    none: ""
  };
  const styledInactiveClasses = {
    full: "p-4 w-full group-first:rounded-s-lg group-last:rounded-e-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
    pill: "py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
    underline: "p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400",
    none: ""
  };
  const ctx = {
    activeClasses: styledActiveClasses[tabStyle] || activeClasses,
    inactiveClasses: styledInactiveClasses[tabStyle] || inactiveClasses,
    selected: writable()
  };
  setContext("ctx", ctx);
  if ($$props.tabStyle === void 0 && $$bindings.tabStyle && tabStyle !== void 0) $$bindings.tabStyle(tabStyle);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.contentClass === void 0 && $$bindings.contentClass && contentClass !== void 0) $$bindings.contentClass(contentClass);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0) $$bindings.divider(divider);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0) $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0) $$bindings.inactiveClasses(inactiveClasses);
  divider = ["full", "pill"].includes(tabStyle) ? false : divider;
  ulClass = twMerge(defaultClass, tabStyle === "underline" && "-mb-px", $$props.class);
  return `<ul${spread([escape_object($$restProps), { class: escape_attribute_value(ulClass) }], {})}>${slots.default ? slots.default({ tabStyle }) : ``}</ul> ${divider ? `${slots.divider ? slots.divider({}) : ` <div class="h-px bg-gray-200 dark:bg-gray-700"></div> `}` : ``} <div${add_attribute("class", contentClass, 0)} role="tabpanel" aria-labelledby="id-tab"></div> `;
});
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["order"]);
  let { order = "default" } = $$props;
  setContext("order", order);
  let olClasses = {
    group: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
    horizontal: "sm:flex",
    activity: "relative border-s border-gray-200 dark:border-gray-700",
    vertical: "relative border-s border-gray-200 dark:border-gray-700",
    default: "relative border-s border-gray-200 dark:border-gray-700"
  };
  if ($$props.order === void 0 && $$bindings.order && order !== void 0) $$bindings.order(order);
  return `<ol${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(olClasses[order], $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</ol> `;
});
const TimelineItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { date = "" } = $$props;
  let { svgClass = "w-3 h-3 text-primary-600 dark:text-primary-400" } = $$props;
  let order = "default";
  order = getContext("order");
  const liClasses = {
    default: "mb-10 ms-4",
    vertical: "mb-10 ms-6",
    horizontal: "relative mb-6 sm:mb-0",
    activity: "mb-10 ms-6",
    group: ""
  };
  const divClasses = {
    default: "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700",
    vertical: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900",
    horizontal: "flex items-center",
    activity: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900",
    group: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
  };
  const timeClasses = {
    default: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
    vertical: "block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
    horizontal: "block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
    activity: "mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0",
    group: "text-lg font-semibold text-gray-900 dark:text-white"
  };
  let liCls = twMerge(liClasses[order], $$props.classLi);
  let divCls = twMerge(divClasses[order], $$props.classDiv);
  let timeCls = twMerge(timeClasses[order], $$props.classTime);
  const h3Cls = twMerge(
    order === "vertical" ? "flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white" : "text-lg font-semibold text-gray-900 dark:text-white",
    $$props.classH3
  );
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
  if ($$props.svgClass === void 0 && $$bindings.svgClass && svgClass !== void 0) $$bindings.svgClass(svgClass);
  return `<li${add_attribute("class", liCls, 0)}><div${add_attribute("class", divCls, 0)}></div> ${order !== "default" ? `${slots.icon ? slots.icon({}) : ` <svg aria-hidden="true"${add_attribute("class", svgClass, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg> `}` : `${date ? `<time${add_attribute("class", timeCls, 0)}>${escape(date)}</time>` : ``}`} ${title ? `<h3${add_attribute("class", h3Cls, 0)}>${escape(title)}</h3>` : ``} ${order !== "default" ? `${date ? `<time${add_attribute("class", timeCls, 0)}>${escape(date)}</time>` : ``}` : ``} ${slots.default ? slots.default({}) : ``}</li> `;
});
const ArrowLeftOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "arrow left outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M5 12h14M5 12l4-4m-4 4 4 4"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M5 12h14M5 12l4-4m-4 4 4 4"></path></svg>`} `;
});
const ArrowRightOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "arrow right outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M19 12H5m14 0-4 4m4-4-4-4"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M19 12H5m14 0-4 4m4-4-4-4"></path></svg>`} `;
});
const CalendarMonthOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "calendar month outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"></path></svg>`} `;
});
const CheckCircleSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
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
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "check circle solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"></path></svg>`} `;
});
const ChevronRightOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "chevron right outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="m10 16 4-4-4-4"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="m10 16 4-4-4-4"></path></svg>`} `;
});
const ChevronUpOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "chevron up outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="m16 14-4-4-4 4"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="m16 14-4-4-4 4"></path></svg>`} `;
});
const DotsHorizontalOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
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
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "dots horizontal outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M6 12h.01m6 0h.01m5.99 0h.01"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M6 12h.01m6 0h.01m5.99 0h.01"></path></svg>`} `;
});
const DownloadOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "download outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"></path></svg>`} `;
});
const FileLinesSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
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
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "file lines solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd"></path></svg>`} `;
});
const FireSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
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
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "fire solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z"></path></svg>`} `;
});
const ImageSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
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
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "image solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" clip-rule="evenodd"></path></svg>`} `;
});
const MapPinAltSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
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
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "map pin alt solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"></path></svg>`} `;
});
const PaperClipOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "paper clip outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"></path></svg>`} `;
});
const QuestionCircleSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
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
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "question circle solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z" clip-rule="evenodd"></path></svg>`} `;
});
const RocketSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
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
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "rocket solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd"></path></svg>`} `;
});
const TableColumnOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "table column outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} d="M3 11h18m-9 0v8m-8 0h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} d="M3 11h18m-9 0v8m-8 0h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"></path></svg>`} `;
});
const TabletOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "tablet outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M11 18h2M5.875 3h12.25c.483 0 .875.448.875 1v16c0 .552-.392 1-.875 1H5.875C5.392 21 5 20.552 5 20V4c0-.552.392-1 .875-1Z"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M11 18h2M5.875 3h12.25c.483 0 .875.448.875 1v16c0 .552-.392 1-.875 1H5.875C5.392 21 5 20.552 5 20V4c0-.552.392-1 .875-1Z"></path></svg>`} `;
});
const thickbars = {
  colors: ["#1A56DB", "#FDBA8C"],
  series: [
    {
      name: "Quantity",
      color: "#EF562F",
      data: [
        { x: "01 Feb", y: 170 },
        { x: "02 Feb", y: 180 },
        { x: "03 Feb", y: 164 },
        { x: "04 Feb", y: 145 },
        { x: "05 Feb", y: 194 },
        { x: "06 Feb", y: 170 },
        { x: "07 Feb", y: 155 }
      ]
    }
  ],
  chart: {
    type: "bar",
    height: "140px",
    fontFamily: "Inter, sans-serif",
    foreColor: "#4B5563",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: "90%",
      borderRadius: 3
    }
  },
  tooltip: {
    shared: false,
    intersect: false,
    style: {
      fontSize: "14px",
      fontFamily: "Inter, sans-serif"
    }
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1
      }
    }
  },
  stroke: {
    show: true,
    width: 5,
    colors: ["transparent"]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    floating: false,
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false
  },
  fill: {
    opacity: 1
  }
};
const colorUp = "text-green-500 dark:text-green-400";
const colorDown = "text-red-500 dark:text-red-400";
const Change = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { unit = "%" } = $$props;
  let { since = "vs last month" } = $$props;
  let { size = "md" } = $$props;
  let { equalHeight = false } = $$props;
  const textSize = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl"
  };
  const spanTextSize = {
    xs: "text-sm",
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl"
  };
  let divClass2;
  let color;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0) $$bindings.unit(unit);
  if ($$props.since === void 0 && $$bindings.since && since !== void 0) $$bindings.since(since);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.equalHeight === void 0 && $$bindings.equalHeight && equalHeight !== void 0) $$bindings.equalHeight(equalHeight);
  divClass2 = twMerge(textSize[size], $$props.class);
  color = value > 0 ? colorUp : value < 0 ? colorDown : "";
  return `<div${add_attribute("class", divClass2, 0)}><span${add_attribute("class", color, 0)}>${value > 0 ? `<span class="text-base leading-4" data-svelte-h="svelte-jk74o">↑</span>${escape(value)}${escape(unit)}` : `${value < 0 ? `<span class="text-base leading-4" data-svelte-h="svelte-1bjzet6">↓</span>${escape(Math.abs(value))}${escape(unit)}` : `--`}`}</span> 
	${equalHeight ? `<span>${escape(since)}</span>` : `<span${add_attribute("class", spanTextSize[size], 0)}>${escape(since)}</span>`}</div>`;
});
const LastRange = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let start;
  let end;
  dayjs.extend(LocalizedFormat);
  let { timeslot = "Last 7 days" } = $$props;
  let { timeslots = {
    Yesterday: -1,
    Today: 0,
    "Last 7 days": 7,
    "Last 30 days": 30,
    "Last 90 days": 90
  } } = $$props;
  let timeslots_keys = Object.keys(timeslots);
  let today = dayjs();
  if ($$props.timeslot === void 0 && $$bindings.timeslot && timeslot !== void 0) $$bindings.timeslot(timeslot);
  if ($$props.timeslots === void 0 && $$bindings.timeslots && timeslots !== void 0) $$bindings.timeslots(timeslots);
  start = today.subtract(timeslots[timeslot], "days").format("ll");
  end = timeslot == "Yesterday" ? start : today.format("ll");
  return `<div class="font-normal"><button class="mt-0.5 inline-flex gap-1 rounded-lg p-2 text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">${escape(timeslot)} ${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render($$result, { size: "lg" }, {}, {})}</button> ${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "min-w-48" }, {}, {
    footer: () => {
      return `<div slot="footer" role="none">${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "font-normal", href: "#" }, {}, {
        default: () => {
          return `Custom...`;
        }
      })}</div>`;
    },
    header: () => {
      return `<div slot="header" role="none">${validate_component(DropdownItem, "DropdownItem").$$render(
        $$result,
        {
          class: "truncate text-gray-900 dark:text-white",
          href: "#"
        },
        {},
        {
          default: () => {
            return `${start == end ? `${escape(start)}` : `${escape(start)} - ${escape(end)}`}`;
          }
        }
      )}</div>`;
    },
    default: () => {
      return `${each(timeslots_keys, (slot) => {
        return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "font-normal", href: "#" }, {}, {
          default: () => {
            return `${escape(slot)} `;
          }
        })}`;
      })}`;
    }
  })}</div>`;
});
const More = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let aClass;
  let { title = "" } = $$props;
  let { href = "#" } = $$props;
  let { flat = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.flat === void 0 && $$bindings.flat && flat !== void 0) $$bindings.flat(flat);
  aClass = twMerge("inline-flex items-center text-xs font-medium text-primary-700 sm:text-sm dark:text-primary-500", flat ? "" : "rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 uppercase");
  return `<div class="flex-shrink-0"><a${add_attribute("href", href, 0)}${add_attribute("class", aClass, 0)}>${escape(title)} ${validate_component(ChevronRightOutline, "ChevronRightOutline").$$render($$result, { size: "md" }, {}, {})}</a></div>`;
});
const ChartWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  let { chartOptions } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0) $$bindings.subtitle(subtitle);
  if ($$props.chartOptions === void 0 && $$bindings.chartOptions && chartOptions !== void 0) $$bindings.chartOptions(chartOptions);
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      size: "xl",
      class: "w-full max-w-none 2xl:col-span-2"
    },
    {},
    {
      default: () => {
        return `<div class="mb-4 flex items-center justify-between"><div class="flex-shrink-0">${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "text-2xl" }, {}, {
          default: () => {
            return `${escape(title)}`;
          }
        })} <p class="text-base font-light text-gray-500 dark:text-gray-400">${escape(subtitle)}</p></div> ${validate_component(Change, "Change").$$render(
          $$result,
          {
            value: 12.5,
            since: "",
            class: "justify-end font-medium"
          },
          {},
          {}
        )}</div> ${validate_component(Chart, "Chart").$$render($$result, { options: chartOptions }, {}, {})} <div class="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6">${validate_component(LastRange, "LastRange").$$render($$result, {}, {}, {})} ${validate_component(More, "More").$$render($$result, { title: "Sales Report", href: "#top" }, {}, {})}</div>`;
      }
    }
  )} `;
});
const Stats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const products = [
    {
      src: "iphone.png",
      image: "iphone",
      label: "iPhone 14 Pro",
      change: 2.5,
      price: "$445,467"
    },
    {
      src: "imac.png",
      image: "imac",
      label: "Apple iMac 27",
      change: 12.5,
      price: "$256,982"
    },
    {
      src: "watch.png",
      image: "watch",
      label: "Apple Watch SE",
      change: -1.35,
      price: "$201,869"
    },
    {
      src: "ipad.png",
      image: "ipad",
      label: "Apple iPad Air",
      change: 12.5,
      price: "$103,967"
    },
    {
      src: "imac.png",
      image: "imac",
      label: "Apple iMac 24",
      change: -2,
      price: "$98,543 "
    }
  ];
  const customers = Users.slice(0, 5);
  return `${validate_component(Card, "Card").$$render($$result, { size: "xl" }, {}, {
    default: () => {
      return `<div class="mb-4 flex items-center gap-2">${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          tag: "h3",
          class: "w-fit text-lg font-semibold dark:text-white"
        },
        {},
        {
          default: () => {
            return `Statistics this month`;
          }
        }
      )} <button><span class="sr-only" data-svelte-h="svelte-1vhhdn4">Show information</span> ${validate_component(QuestionCircleSolid, "QuestionCircleSolid").$$render(
        $$result,
        {
          size: "sm",
          class: "text-gray-400 hover:text-gray-500"
        },
        {},
        {}
      )}</button> ${validate_component(Popover, "Popover").$$render($$result, { placement: "bottom-start" }, {}, {
        default: () => {
          return `<div class="w-72 space-y-2 text-sm font-normal text-gray-500 dark:text-gray-400"><h3 class="font-semibold text-gray-900 dark:text-white" data-svelte-h="svelte-x5hz8b">Statistics</h3> <p data-svelte-h="svelte-1mwh61m">Statistics is a branch of applied mathematics that involves the collection, description,
					analysis, and inference of conclusions from quantitative data.</p> ${validate_component(More, "More").$$render(
            $$result,
            {
              title: "Read more",
              href: "#top",
              flat: true
            },
            {},
            {}
          )}</div>`;
        }
      })}</div> ${validate_component(Tabs, "Tabs").$$render(
        $$result,
        {
          style: "full",
          defaultClass: "flex divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700",
          contentClass: "p-3 mt-4"
        },
        {},
        {
          default: () => {
            return `${validate_component(TabItem, "TabItem").$$render($$result, { class: "w-full", open: true }, {}, {
              title: () => {
                return `<span slot="title" data-svelte-h="svelte-dekkwa">Top products</span>`;
              },
              default: () => {
                return `<ul class="-m-3 divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">${each(products, ({ src, image, label, price, change }) => {
                  return `<li class="py-3 sm:py-4"><div class="flex items-center justify-between"><div class="flex min-w-0 items-center"><img class="h-10 w-10 flex-shrink-0"${add_attribute("src", imagesPath(src, "products"), 0)}${add_attribute("alt", image, 0)}> <div class="ml-3"><p class="truncate font-medium text-gray-900 dark:text-white">${escape(label)}</p> ${validate_component(Change, "Change").$$render(
                    $$result,
                    {
                      value: change,
                      size: "sm",
                      equalHeight: true,
                      class: "ml-px"
                    },
                    {},
                    {}
                  )} </div></div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${escape(price)} </div></div> </li>`;
                })}</ul>`;
              }
            })} ${validate_component(TabItem, "TabItem").$$render($$result, { class: "w-full" }, {}, {
              title: () => {
                return `<span slot="title" data-svelte-h="svelte-14anm0v">Top customers</span>`;
              },
              default: () => {
                return `<ul class="-m-3 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">${each(customers, ({ email, name, avatar }) => {
                  return `<li class="py-3 sm:py-3.5"><div class="flex items-center justify-between"><div class="flex min-w-0 items-center">${validate_component(Avatar, "Avatar").$$render($$result, { src: imagesPath(avatar, "users") }, {}, {})} <div class="ml-3"><p class="truncate font-medium text-gray-900 dark:text-white">${escape(name)}</p> <span class="text-gray-500">${escape(email)}</span> </div></div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$${escape(Math.floor(Math.random() * 1e4))} </div></div> </li>`;
                })}</ul>`;
              }
            })}`;
          }
        }
      )} <div class="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6">${validate_component(LastRange, "LastRange").$$render($$result, {}, {}, {})} ${validate_component(More, "More").$$render($$result, { title: "Full Report", href: "#top" }, {}, {})}</div>`;
    }
  })}`;
});
function users(dark) {
  let backgroundBarColors = ["#E5E7EB", "#E5E7EB", "#E5E7EB", "#E5E7EB", "#E5E7EB", "#E5E7EB", "#E5E7EB"];
  if (dark) {
    backgroundBarColors = ["#374151", "#374151", "#374151", "#374151", "#374151", "#374151", "#374151"];
  }
  return {
    series: [{
      name: "Users",
      data: [1334, 2435, 1753, 1328, 1155, 1632, 1336]
    }],
    labels: ["01 Feb", "02 Feb", "03 Feb", "04 Feb", "05 Feb", "06 Feb", "07 Feb"],
    chart: {
      type: "bar",
      height: "140px",
      foreColor: "#4B5563",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        color: "#EF562F"
      }
    },
    plotOptions: {
      bar: {
        columnWidth: "25%",
        borderRadius: 3,
        colors: {
          backgroundBarColors,
          backgroundBarRadius: 3
        }
      }
      // dataLabels: {
      // 	hideOverflowingLabels: false
      // }
    },
    xaxis: {
      floating: false,
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif"
      }
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.8
        }
      }
    },
    fill: {
      opacity: 1
    },
    yaxis: {
      show: false
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    }
  };
}
const DarkChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { configFunc } = $$props;
  let dark = false;
  let options2;
  if ($$props.configFunc === void 0 && $$bindings.configFunc && configFunc !== void 0) $$bindings.configFunc(configFunc);
  options2 = configFunc(dark);
  return `${validate_component(Chart, "Chart").$$render($$result, { options: options2, class: $$props.class }, {}, {})}`;
});
function getChartOptions(dark) {
  let mainChartColors;
  {
    mainChartColors = {
      borderColor: "#F3F4F6",
      labelColor: "#6B7280",
      opacityFrom: 0.45,
      opacityTo: 0
    };
  }
  const options2 = {
    chart: {
      height: 420,
      type: "area",
      fontFamily: "Inter, sans-serif",
      foreColor: mainChartColors.labelColor,
      toolbar: {
        show: false
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        opacityFrom: mainChartColors.opacityFrom,
        opacityTo: mainChartColors.opacityTo,
        stops: [0, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif"
      }
    },
    grid: {
      show: true,
      borderColor: mainChartColors.borderColor,
      strokeDashArray: 1,
      padding: {
        left: 35,
        bottom: 15
      }
    },
    series: [],
    markers: {
      size: 5,
      strokeColors: "#ffffff",
      hover: {
        size: void 0,
        sizeOffset: 3
      }
    },
    xaxis: {
      categories: ["01 Feb", "02 Feb", "03 Feb", "04 Feb", "05 Feb", "06 Feb", "07 Feb"],
      labels: {
        style: {
          colors: [mainChartColors.labelColor],
          fontSize: "14px",
          fontWeight: 500
        }
      },
      axisBorder: {
        color: mainChartColors.borderColor
      },
      axisTicks: {
        color: mainChartColors.borderColor
      },
      crosshairs: {
        show: true,
        position: "back",
        stroke: {
          color: mainChartColors.borderColor,
          width: 1,
          dashArray: 10
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: [mainChartColors.labelColor],
          fontSize: "14px",
          fontWeight: 500
        },
        formatter: function(value) {
          return "$" + value;
        }
      }
    },
    legend: {
      fontSize: "14px",
      fontWeight: 500,
      fontFamily: "Inter, sans-serif",
      labels: {
        colors: [mainChartColors.labelColor]
      },
      itemMargin: {
        horizontal: 10
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          xaxis: {
            labels: {
              show: false
            }
          }
        }
      }
    ]
  };
  return options2;
}
const ActivityList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, { size: "xl" }, {}, {
    default: () => {
      return `<div class="mb-4 flex items-center justify-between" data-svelte-h="svelte-1parinb"><h3 class="text-lg font-semibold text-gray-900 dark:text-white">Latest Activity</h3> <a href="#top" class="inline-flex items-center rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">View all</a></div> ${validate_component(Timeline, "Timeline").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(TimelineItem, "TimelineItem").$$render(
            $$result,
            {
              title: "Application UI design in Figma",
              date: "April 2023"
            },
            {},
            {
              default: () => {
                return `<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1f68xy4">GGet access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
				and pre-order E-commerce &amp; Marketing pages.</p> ${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
                  default: () => {
                    return `Learn more${validate_component(ArrowRightOutline, "ArrowRightOutline").$$render($$result, { class: "ms-2", size: "sm" }, {}, {})}`;
                  }
                })}`;
              }
            }
          )} ${validate_component(TimelineItem, "TimelineItem").$$render(
            $$result,
            {
              title: "Marketing UI code in Flowbite",
              date: "March 2023"
            },
            {},
            {
              default: () => {
                return `<p class="text-base font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1uibqme">Get started with dozens of web components and interactive elements built on top of Tailwind
				CSS.</p> <a href="#top" class="inline-flex items-center text-xs font-medium text-primary-700 hover:underline dark:text-primary-500 sm:text-sm">Go to Flowbite Blocks${validate_component(ArrowRightOutline, "ArrowRightOutline").$$render($$result, { class: "ms-2", size: "sm" }, {}, {})}</a>`;
              }
            }
          )} ${validate_component(TimelineItem, "TimelineItem").$$render(
            $$result,
            {
              title: "Marketing UI design in Figma",
              date: "February 2023"
            },
            {},
            {
              default: () => {
                return `<p class="text-base font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1uibqme">Get started with dozens of web components and interactive elements built on top of Tailwind
				CSS.</p>`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}`;
});
const ChatMsg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { avatar = "https://flowbite.com/docs/images/people/profile-picture-2.jpg" } = $$props;
  let { name = "Michael Gough" } = $$props;
  let { timestamp = /* @__PURE__ */ new Date() } = $$props;
  let { replays = 0 } = $$props;
  if ($$props.avatar === void 0 && $$bindings.avatar && avatar !== void 0) $$bindings.avatar(avatar);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.timestamp === void 0 && $$bindings.timestamp && timestamp !== void 0) $$bindings.timestamp(timestamp);
  if ($$props.replays === void 0 && $$bindings.replays && replays !== void 0) $$bindings.replays(replays);
  return `<article class="${"mb-5 space-y-3 " + escape($$props.class ?? "", true)}"><footer class="flex items-center justify-between"><div class="flex items-center gap-2">${validate_component(Avatar, "Avatar").$$render($$result, { size: "xs", src: avatar, alt: name }, {}, {})} <p class="text-sm font-semibold text-gray-900 dark:text-white">${escape(name)}</p> <p class="ms-1 text-sm text-gray-600 dark:text-gray-400"><time${add_attribute("datetime", timestamp.toDateString(), 0)}${add_attribute("title", timestamp.toDateString(), 0)}>${escape(timestamp.toDateString())}</time></p></div> ${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, { class: "rounded dark:hover:text-white" }, {}, {
    default: () => {
      return `${validate_component(DotsHorizontalOutline, "DotsHorizontalOutline").$$render($$result, { size: "lg" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-9spm6l">Comment settings</span>`;
    }
  })} ${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "w-32", placement: "bottom-end" }, {}, {
    default: () => {
      return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
        default: () => {
          return `Edit`;
        }
      })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
        default: () => {
          return `Remove`;
        }
      })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
        default: () => {
          return `Report`;
        }
      })}`;
    }
  })}</footer> <div class="space-y-2 text-gray-900 dark:text-white">${slots.default ? slots.default({}) : ``}</div> ${replays ? `<a href="/" class="inline-flex items-center gap-1 text-xs font-medium text-primary-700 dark:text-primary-500 sm:text-sm">${escape(replays)} replies
			${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render($$result, { size: "lg" }, {}, {})}</a>` : ``}</article>`;
});
const Message = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setContext("background", false);
  return `<form>${validate_component(Textarea, "Textarea").$$render(
    $$result,
    {
      rows: 8,
      placeholder: "Write your message",
      required: true
    },
    {},
    {
      footer: () => {
        return `<div slot="footer" class="flex items-center justify-between">${validate_component(Button, "Button").$$render($$result, { type: "submit", size: "xs" }, {}, {
          default: () => {
            return `Post comment`;
          }
        })} ${validate_component(Toolbar, "Toolbar").$$render(
          $$result,
          {
            embedded: true,
            class: "text-gray-500 dark:text-gray-400",
            slot: "foot"
          },
          {},
          {
            default: () => {
              return `${validate_component(ToolbarButton, "ToolbarButton").$$render(
                $$result,
                {
                  class: "p-2 hover:text-gray-900 dark:hover:text-white"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(PaperClipOutline, "PaperClipOutline").$$render($$result, { size: "md" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-k893q4">Attach file</span>`;
                  }
                }
              )} ${validate_component(ToolbarButton, "ToolbarButton").$$render(
                $$result,
                {
                  class: "p-2 hover:text-gray-900 dark:hover:text-white"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(MapPinAltSolid, "MapPinAltSolid").$$render($$result, { size: "md" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-1luqv8w">Set location</span>`;
                  }
                }
              )} ${validate_component(ToolbarButton, "ToolbarButton").$$render(
                $$result,
                {
                  class: "p-2 hover:text-gray-900 dark:hover:text-white"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(ImageSolid, "ImageSolid").$$render($$result, { size: "md" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-4d7pbn">Upload image</span>`;
                  }
                }
              )}`;
            }
          }
        )}</div>`;
      }
    }
  )}</form>`;
});
const Chat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, { size: "xl" }, {}, {
    default: () => {
      return `<div class="mb-4 flex items-center justify-between" data-svelte-h="svelte-lzs6pm"><h3 class="text-lg font-semibold text-gray-900 dark:text-white">Smart chat</h3> <a href="#top" class="inline-flex items-center rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">View all</a></div>  <form class="overflow-y-auto lg:max-h-[60rem] 2xl:max-h-fit">${validate_component(ChatMsg, "ChatMsg").$$render(
        $$result,
        {
          replays: 4,
          name: Users[2].name,
          avatar: imagesPath(Users[2].avatar, "users")
        },
        {},
        {
          default: () => {
            return `<p data-svelte-h="svelte-30udrm">Hello <a href="#top" class="font-medium text-primary-600 hover:underline dark:text-primary-500">@designteam</a> Let&#39;s schedule a kick-off meeting and workshop this week. It would be great to gather everyone
				involved in the design project. Let me know about your availability in the thread.</p> <p data-svelte-h="svelte-1xbbun4">Looking forward to it! Thanks.</p>`;
          }
        }
      )} ${validate_component(ChatMsg, "ChatMsg").$$render(
        $$result,
        {
          replays: 0,
          name: Users[4].name,
          avatar: imagesPath(Users[4].avatar, "users")
        },
        {},
        {
          default: () => {
            return `<p data-svelte-h="svelte-3s32l3">Hello everyone,</p> <p data-svelte-h="svelte-1ecsu9a">Thank you for the workshop, it was very productive meeting. I can&#39;t wait to start working on
				this new project with you guys. But first things first, I&#39;am waiting for the offer and pitch
				deck from you. It would be great to get it by the end o the month.</p> <p data-svelte-h="svelte-gfuxd1">Cheers!</p> <div class="mb-2 flex items-center space-x-2" data-svelte-h="svelte-lttnft"><button type="button" class="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1.5 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"><svg aria-hidden="true" class="mr-2 h-5" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 14.1907C24 12.7352 23.7409 11.3397 23.2659 10.0486C22.9412 13.8526 20.9132 15.8065 18.7941 14.8966C16.8092 14.0439 18.1468 10.7199 18.2456 9.13377C18.4122 6.44506 18.2372 3.36742 13.3532 0.808594C15.3826 4.69095 13.5882 7.10295 11.7064 7.24977C9.61835 7.41283 7.70612 5.45542 8.412 2.27895C6.12635 3.96318 6.06 6.79801 6.76518 8.63189C7.50071 10.5434 6.73553 12.1317 4.94188 12.3081C2.93718 12.5058 1.82329 10.1615 2.85035 6.42601C1.07294 8.51895 0 11.2295 0 14.1907C0 20.8182 5.37247 26.1907 12 26.1907C18.6275 26.1907 24 20.8182 24 14.1907Z" fill="#F4900C"></path><path d="M19.3349 17.7211C19.4393 19.8981 17.5271 20.7515 16.4979 20.3393C15.0113 19.7442 15.4102 18.7221 15.0276 16.6044C14.645 14.4868 13.1746 13.0164 10.9984 12.3691C12.5866 16.8395 10.1182 18.487 8.82428 18.7814C7.50287 19.0821 6.17511 18.7807 6.02334 15.9529C4.4817 17.4875 3.52734 19.6108 3.52734 21.9571C3.52734 22.2169 3.54358 22.4724 3.56617 22.7266C5.73323 24.8682 8.70993 26.1924 11.9979 26.1924C15.2859 26.1924 18.2626 24.8682 20.4297 22.7266C20.4523 22.4724 20.4685 22.2169 20.4685 21.9571C20.4685 20.4134 20.0563 18.967 19.3349 17.7211Z" fill="#FFCC4D"></path></svg> <span class="text-sm font-medium text-gray-500 dark:text-gray-400">14</span></button> <button type="button" class="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1.5 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"><svg aria-hidden="true" class="mr-2 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.24467 6.07733C3.87207 5.63882 4.81784 5.72291 5.38116 6.18812L4.73508 5.24903C4.21514 4.5075 4.40135 3.70523 5.14355 3.18462C5.88575 2.66601 7.98887 4.06031 7.98887 4.06031C7.46426 3.31143 7.56238 2.36233 8.31125 1.83705C9.06012 1.31377 10.0933 1.49465 10.6179 2.24486L17.5727 12.0697L16.6864 20.663L9.28906 17.9652L2.83686 8.3987C2.30758 7.64516 2.49046 6.60594 3.24467 6.07733Z" fill="#EF9645"></path><path d="M1.79857 11.5433C1.79857 11.5433 1.04302 10.442 2.14497 9.68715C3.24559 8.93226 4.00047 10.0329 4.00047 10.0329L7.50523 15.1442C7.62603 14.9426 7.75819 14.7437 7.90569 14.5475L3.04135 7.45454C3.04135 7.45454 2.28647 6.35392 3.38775 5.59904C4.48837 4.84416 5.24325 5.94478 5.24325 5.94478L9.81859 12.6172C9.98879 12.4784 10.163 12.3389 10.3425 12.2021L5.03835 4.46572C5.03835 4.46572 4.28347 3.3651 5.38475 2.61022C6.48537 1.85534 7.24025 2.95596 7.24025 2.95596L12.5444 10.691C12.7393 10.5715 12.9322 10.4681 13.1258 10.3586L8.168 3.12883C8.168 3.12883 7.41312 2.02821 8.51373 1.27333C9.61435 0.518448 10.3692 1.61907 10.3692 1.61907L15.6113 9.26398L16.4083 10.4267C13.1058 12.692 12.7914 16.9536 14.6783 19.7055C15.0554 20.2561 15.606 19.879 15.606 19.879C13.3414 16.5758 14.0328 12.8642 17.336 10.5995L16.3622 5.72586C16.3622 5.72586 15.9985 4.44169 17.282 4.07727C18.5661 3.71351 18.9306 4.99767 18.9306 4.99767L20.0552 8.33757C20.5011 9.66178 20.9756 10.9813 21.6037 12.2294C23.3771 15.7536 22.3178 20.1333 18.9739 22.4273C15.3263 24.9283 10.3399 23.9985 7.83828 20.3516L1.79857 11.5433Z" fill="#FFDC5D"></path><path d="M8.00913 21.3583C5.33934 21.3583 2.64153 18.6605 2.64153 15.9907C2.64153 15.6216 2.37122 15.3232 2.00212 15.3232C1.63302 15.3232 1.30664 15.6216 1.30664 15.9907C1.30664 19.9954 4.00445 22.6932 8.00913 22.6932C8.37822 22.6932 8.67657 22.3668 8.67657 21.9977C8.67657 21.6286 8.37822 21.3583 8.00913 21.3583Z" fill="#5DADEC"></path><path d="M4.67212 22.6649C2.66978 22.6649 1.33489 21.33 1.33489 19.3277C1.33489 18.9586 1.03654 18.6602 0.667445 18.6602C0.298348 18.6602 0 18.9586 0 19.3277C0 21.9974 2.00234 23.9998 4.67212 23.9998C5.04121 23.9998 5.33956 23.7014 5.33956 23.3323C5.33956 22.9632 5.04121 22.6649 4.67212 22.6649ZM16.0187 1.30664C15.6503 1.30664 15.3512 1.60566 15.3512 1.97409C15.3512 2.34252 15.6503 2.64153 16.0187 2.64153C18.6885 2.64153 21.3583 5.03699 21.3583 7.98109C21.3583 8.34952 21.6573 8.64854 22.0257 8.64854C22.3941 8.64854 22.6931 8.34952 22.6931 7.98109C22.6931 4.3008 20.0234 1.30664 16.0187 1.30664Z" fill="#5DADEC"></path><path d="M19.3559 0C18.9875 0 18.6885 0.270983 18.6885 0.639413C18.6885 1.00784 18.9875 1.33489 19.3559 1.33489C21.3583 1.33489 22.6651 2.81996 22.6651 4.64408C22.6651 5.01251 22.9915 5.31153 23.3606 5.31153C23.7297 5.31153 24 5.01251 24 4.64408C24 2.0831 22.0257 0 19.3559 0Z" fill="#5DADEC"></path></svg> <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8</span></button> <button type="button" class="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1.5 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"><svg aria-hidden="true" class="mr-2 h-5" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75255 5.29787C7.67789 5.37254 7.62122 5.46254 7.57388 5.56121L7.56855 5.55587L0.0910439 22.4003L0.0983774 22.4076C-0.0402924 22.6763 0.191713 23.223 0.667057 23.699C1.1424 24.1743 1.68908 24.4063 1.95775 24.2676L1.96442 24.2743L18.8088 16.7961L18.8035 16.7901C18.9015 16.7435 18.9915 16.6868 19.0668 16.6108C20.1082 15.5694 18.4195 12.1927 15.2961 9.06862C12.1713 5.94455 8.79458 4.25651 7.75255 5.29787Z" fill="#DD2E44"></path><path d="M8.66858 8.30273L0.279048 21.9737L0.0910439 22.3971L0.0983774 22.4044C-0.0402924 22.6731 0.191713 23.2197 0.667057 23.6958C0.821728 23.8504 0.982398 23.9678 1.13973 24.0671L11.3353 11.6361L8.66858 8.30273Z" fill="#EA596E"></path><path d="M15.3439 9.01304C18.4573 12.1278 20.186 15.4479 19.2033 16.4292C18.2213 17.4119 14.9012 15.6839 11.7858 12.5705C8.67174 9.45572 6.9437 6.13431 7.92573 5.15228C8.90841 4.17026 12.2285 5.8983 15.3439 9.01304Z" fill="#A0041E"></path><path d="M12.3913 9.37694C12.2587 9.48427 12.0853 9.54028 11.902 9.52028C11.3233 9.45761 10.8366 9.25627 10.496 8.93826C10.1353 8.60159 9.95727 8.14958 10.0059 7.6969C10.0913 6.90221 10.8886 6.17286 12.248 6.31953C12.7767 6.3762 13.0127 6.2062 13.0207 6.12486C13.03 6.04419 12.836 5.82752 12.3073 5.77019C11.7286 5.70752 11.242 5.50618 10.9006 5.18817C10.54 4.8515 10.3613 4.39949 10.4106 3.94681C10.4973 3.15213 11.294 2.42278 12.652 2.57011C13.0373 2.61145 13.2407 2.53211 13.3267 2.48078C13.3954 2.43878 13.4227 2.39878 13.4254 2.37544C13.4334 2.29477 13.242 2.0781 12.712 2.02077C12.346 1.98077 12.0807 1.65276 12.1213 1.28608C12.1607 0.920076 12.488 0.655404 12.8553 0.695405C14.2134 0.841408 14.8374 1.72343 14.7514 2.51878C14.6647 3.3148 13.868 4.04281 12.5087 3.89681C12.1233 3.85481 11.922 3.93481 11.8353 3.98615C11.7666 4.02748 11.7386 4.06815 11.736 4.09082C11.7273 4.17215 11.92 4.38816 12.45 4.44549C13.808 4.59216 14.432 5.47351 14.346 6.26887C14.26 7.06355 13.4634 7.7929 12.1047 7.64557C11.7193 7.60423 11.5166 7.68423 11.43 7.7349C11.3606 7.77757 11.334 7.81757 11.3313 7.84024C11.3226 7.9209 11.5153 8.13758 12.0447 8.19491C12.41 8.23491 12.676 8.56359 12.6353 8.92959C12.6167 9.11226 12.524 9.27027 12.3913 9.37694Z" fill="#AA8DD8"></path><path d="M20.4411 15.5411C21.7565 15.1698 22.6638 15.7565 22.8798 16.5265C23.0958 17.2958 22.6278 18.2699 21.3131 18.6399C20.7998 18.7839 20.6458 19.0292 20.6665 19.1072C20.6891 19.1859 20.9498 19.3152 21.4618 19.1706C22.7765 18.8005 23.6839 19.3872 23.8999 20.1566C24.1172 20.9266 23.6479 21.8993 22.3325 22.27C21.8198 22.414 21.6651 22.66 21.6878 22.738C21.7098 22.816 21.9698 22.9453 22.4825 22.8013C22.8358 22.702 23.2052 22.908 23.3045 23.262C23.4032 23.6167 23.1972 23.9847 22.8425 24.0847C21.5285 24.4547 20.6205 23.8693 20.4031 23.0986C20.1871 22.3293 20.6558 21.3566 21.9718 20.9859C22.4852 20.8413 22.6392 20.5966 22.6165 20.5179C22.5952 20.4399 22.3352 20.3099 21.8232 20.4539C20.5071 20.8246 19.6004 20.2392 19.3838 19.4679C19.1671 18.6985 19.6358 17.7259 20.9511 17.3545C21.4631 17.2112 21.6171 16.9645 21.5958 16.8872C21.5731 16.8085 21.3138 16.6792 20.8011 16.8232C20.4465 16.9232 20.0791 16.7165 19.9791 16.3625C19.8798 16.0092 20.0864 15.6411 20.4411 15.5411Z" fill="#77B255"></path><path d="M15.3333 13.7449C15.1373 13.7449 14.9439 13.6589 14.8119 13.4949C14.5819 13.2069 14.6292 12.7875 14.9159 12.5575C15.0612 12.4409 18.528 9.71812 23.4274 10.4188C23.7921 10.4708 24.0455 10.8081 23.9935 11.1728C23.9415 11.5368 23.6068 11.7928 23.2388 11.7382C18.91 11.1235 15.7806 13.5742 15.7499 13.5989C15.6259 13.6975 15.4793 13.7449 15.3333 13.7449Z" fill="#AA8DD8"></path><path d="M3.83539 10.9697C3.77205 10.9697 3.70739 10.9604 3.64338 10.9417C3.29071 10.8357 3.0907 10.4643 3.19671 10.1117C3.95206 7.59628 4.63674 3.58219 3.79539 2.5355C3.70138 2.41683 3.55938 2.30016 3.23404 2.32483C2.60869 2.37283 2.66803 3.69219 2.66869 3.70552C2.69669 4.07287 2.42069 4.39287 2.05401 4.42021C1.68134 4.44287 1.36666 4.1722 1.33933 3.80486C1.27066 2.8855 1.55667 1.1148 3.13404 0.995461C3.83805 0.942127 4.42273 1.1868 4.83541 1.70014C6.41611 3.66752 4.81141 9.37099 4.47407 10.495C4.3874 10.7837 4.12206 10.9697 3.83539 10.9697Z" fill="#77B255"></path><path d="M16.999 7.63774C17.5513 7.63774 17.9991 7.19002 17.9991 6.63772C17.9991 6.08542 17.5513 5.6377 16.999 5.6377C16.4467 5.6377 15.999 6.08542 15.999 6.63772C15.999 7.19002 16.4467 7.63774 16.999 7.63774Z" fill="#5C913B"></path><path d="M1.33336 13.6355C2.06976 13.6355 2.66673 13.0385 2.66673 12.3021C2.66673 11.5657 2.06976 10.9688 1.33336 10.9688C0.596967 10.9688 0 11.5657 0 12.3021C0 13.0385 0.596967 13.6355 1.33336 13.6355Z" fill="#9266CC"></path><path d="M21.666 14.3047C22.2183 14.3047 22.6661 13.857 22.6661 13.3047C22.6661 12.7524 22.2183 12.3047 21.666 12.3047C21.1137 12.3047 20.666 12.7524 20.666 13.3047C20.666 13.857 21.1137 14.3047 21.666 14.3047Z" fill="#5C913B"></path><path d="M15.666 22.3038C16.2183 22.3038 16.6661 21.856 16.6661 21.3037C16.6661 20.7514 16.2183 20.3037 15.666 20.3037C15.1137 20.3037 14.666 20.7514 14.666 21.3037C14.666 21.856 15.1137 22.3038 15.666 22.3038Z" fill="#5C913B"></path><path d="M18.6683 4.30052C19.4047 4.30052 20.0017 3.70355 20.0017 2.96715C20.0017 2.23076 19.4047 1.63379 18.6683 1.63379C17.9319 1.63379 17.335 2.23076 17.335 2.96715C17.335 3.70355 17.9319 4.30052 18.6683 4.30052Z" fill="#FFCC4D"></path><path d="M21.6699 6.9688C22.2222 6.9688 22.67 6.52107 22.67 5.96877C22.67 5.41648 22.2222 4.96875 21.6699 4.96875C21.1176 4.96875 20.6699 5.41648 20.6699 5.96877C20.6699 6.52107 21.1176 6.9688 21.6699 6.9688Z" fill="#FFCC4D"></path><path d="M19.668 9.63384C20.2203 9.63384 20.668 9.18611 20.668 8.63381C20.668 8.08151 20.2203 7.63379 19.668 7.63379C19.1157 7.63379 18.668 8.08151 18.668 8.63381C18.668 9.18611 19.1157 9.63384 19.668 9.63384Z" fill="#FFCC4D"></path><path d="M5.00198 16.9668C5.55427 16.9668 6.002 16.5191 6.002 15.9668C6.002 15.4145 5.55427 14.9668 5.00198 14.9668C4.44968 14.9668 4.00195 15.4145 4.00195 15.9668C4.00195 16.5191 4.44968 16.9668 5.00198 16.9668Z" fill="#FFCC4D"></path></svg> <span class="text-sm font-medium text-gray-500 dark:text-gray-400">3</span></button></div>`;
          }
        }
      )} ${validate_component(ChatMsg, "ChatMsg").$$render(
        $$result,
        {
          replays: 0,
          name: Users[3].name,
          avatar: imagesPath(Users[3].avatar, "users")
        },
        {},
        {
          default: () => {
            return `<p data-svelte-h="svelte-1ru2cpn">Ok <a href="#top" class="font-medium text-primary-600 hover:underline dark:text-primary-500">@team</a> I&#39;am attaching our offer and pitch deck. Take your time to review everything. I&#39;am looking
				forward to the next steps! Thank you.</p> <p data-svelte-h="svelte-1xbbun4">Looking forward to it! Thanks.</p> <div class="items-center 2xl:flex 2xl:space-x-4"> <div class="mb-3.5 flex items-center rounded-lg border border-gray-200 p-3 dark:border-gray-700"><div class="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300">${validate_component(FileLinesSolid, "FileLinesSolid").$$render($$result, { size: "lg" }, {}, {})}</div> <div class="mr-4" data-svelte-h="svelte-17atp1o"><p class="text-sm font-semibold text-gray-900 dark:text-white">flowbite_offer_345&quot;</p> <p class="text-sm text-gray-500 dark:text-gray-400">PDF, 2.3 MB</p></div> <div class="ml-auto flex items-center text-gray-500 dark:text-gray-400">${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, { class: "rounded" }, {}, {
              default: () => {
                return `${validate_component(DownloadOutline, "DownloadOutline").$$render($$result, { size: "lg" }, {}, {})}<span class="sr-only" data-svelte-h="svelte-1l0wlir">Download</span>`;
              }
            })} ${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, { class: "rounded" }, {}, {
              default: () => {
                return `${validate_component(DotsVerticalOutline, "DotsVerticalOutline").$$render($$result, { size: "lg" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-1nvuc3u">Actions</span>`;
              }
            })}</div></div>  <div class="mb-3.5 flex items-center rounded-lg border border-gray-200 p-3 dark:border-gray-700"><div class="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-300">${validate_component(TableColumnOutline, "TableColumnOutline").$$render($$result, { size: "lg" }, {}, {})}</div> <div class="mr-4" data-svelte-h="svelte-iypgx"><p class="text-sm font-semibold text-gray-900 dark:text-white">bergside_pitch&quot;</p> <p class="text-sm text-gray-500 dark:text-gray-400">PPTX, 10.1 MB</p></div> <div class="ml-auto flex items-center text-gray-500 dark:text-gray-400">${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, { class: "rounded" }, {}, {
              default: () => {
                return `${validate_component(DownloadOutline, "DownloadOutline").$$render($$result, { size: "lg" }, {}, {})}<span class="sr-only" data-svelte-h="svelte-1l0wlir">Download</span>`;
              }
            })} ${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, { class: "rounded" }, {}, {
              default: () => {
                return `${validate_component(DotsVerticalOutline, "DotsVerticalOutline").$$render($$result, { size: "lg" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-1nvuc3u">Actions</span>`;
              }
            })}</div></div></div>`;
          }
        }
      )} ${validate_component(ChatMsg, "ChatMsg").$$render(
        $$result,
        {
          replays: 0,
          name: Users[8].name,
          avatar: imagesPath(Users[8].avatar, "users"),
          class: "pl-12"
        },
        {},
        {
          default: () => {
            return `<p data-svelte-h="svelte-18o4cdt">Hello <a href="#top" class="font-medium text-primary-600 hover:underline dark:text-primary-500">@jeseleos</a> I need some informations about flowbite react version.</p>`;
          }
        }
      )} ${validate_component(ChatMsg, "ChatMsg").$$render(
        $$result,
        {
          replays: 0,
          name: Users[3].name,
          avatar: imagesPath(Users[3].avatar, "users"),
          class: "pl-12"
        },
        {},
        {
          default: () => {
            return `<p class="mb-5" data-svelte-h="svelte-phlv2j">Hi <a href="#top" class="font-medium text-primary-600 hover:underline dark:text-primary-500">@josephh</a> Sure, just let me know whean you are available and we can speak.</p> <label for="chat" class="sr-only" data-svelte-h="svelte-my98v9">Your message</label> <div class="flex items-center gap-5">${validate_component(Textarea, "Textarea").$$render(
              $$result,
              {
                rows: 1,
                placeholder: "Reply in thread..."
              },
              {},
              {}
            )} ${validate_component(ToolbarButton, "ToolbarButton").$$render(
              $$result,
              {
                type: "submit",
                color: "default",
                class: "p-2 text-primary-600 hover:bg-primary-100"
              },
              {},
              {
                default: () => {
                  return `<svg aria-hidden="true" class="h-6 w-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg> <span class="sr-only" data-svelte-h="svelte-62b3ie">Send message</span>`;
                }
              }
            )}</div> <span class="inline-flex cursor-pointer items-center gap-1 text-xs font-medium text-primary-700 hover:underline dark:text-primary-500 sm:text-sm">Hide thread ${validate_component(ChevronUpOutline, "ChevronUpOutline").$$render($$result, { size: "lg" }, {}, {})}</span>`;
          }
        }
      )}</form> ${validate_component(Message, "Message").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
const options = {
  colors: ["#EF562F", "#FDBA8C"],
  series: [
    {
      name: "Desktop PC",
      color: "#EF562F",
      data: [
        { x: "01 Feb", y: 170 },
        { x: "02 Feb", y: 180 },
        { x: "03 Feb", y: 164 },
        { x: "04 Feb", y: 145 },
        { x: "05 Feb", y: 194 },
        { x: "06 Feb", y: 170 },
        { x: "07 Feb", y: 155 }
      ]
    },
    {
      name: "Phones",
      color: "#FDBA8C",
      data: [
        { x: "01 Feb", y: 120 },
        { x: "02 Feb", y: 294 },
        { x: "03 Feb", y: 167 },
        { x: "04 Feb", y: 179 },
        { x: "05 Feb", y: 245 },
        { x: "06 Feb", y: 182 },
        { x: "07 Feb", y: 143 }
      ]
    },
    {
      name: "Gaming/Console",
      color: "#17B0BD",
      data: [
        { x: "01 Feb", y: 220 },
        { x: "02 Feb", y: 194 },
        { x: "03 Feb", y: 217 },
        { x: "04 Feb", y: 279 },
        { x: "05 Feb", y: 215 },
        { x: "06 Feb", y: 263 },
        { x: "07 Feb", y: 183 }
      ]
    }
  ],
  chart: {
    type: "bar",
    height: "420px",
    fontFamily: "Inter, sans-serif",
    foreColor: "#4B5563",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: "90%",
      borderRadius: 3
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontSize: "14px",
      fontFamily: "Inter, sans-serif"
    }
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1
      }
    }
  },
  stroke: {
    show: true,
    width: 5,
    colors: ["transparent"]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    floating: false,
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false
  },
  fill: {
    opacity: 1
  }
};
const DesktopPc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, { size: "xl", class: "h-fit" }, {}, {
    default: () => {
      return `<div class="items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700 sm:flex"><div class="mb-4 w-full sm:mb-0"><h3 class="text-base font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-3i7yyl">Sales by category</h3> <span class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl" data-svelte-h="svelte-d6zfuk">Desktop PC</span> ${validate_component(Change, "Change").$$render(
        $$result,
        {
          value: 2.5,
          since: "Since last month",
          size: "sm"
        },
        {},
        {}
      )}</div> <div class="w-full max-w-lg"><div class="grid grid-cols-2 items-center gap-4">${validate_component(Input, "Input").$$render($$result, { placeholder: "From", class: "border" }, {}, {
        left: () => {
          return `${validate_component(CalendarMonthOutline, "CalendarMonthOutline").$$render($$result, { slot: "left", size: "md" }, {}, {})}`;
        }
      })} ${validate_component(Input, "Input").$$render($$result, { placeholder: "To", class: "border" }, {}, {
        left: () => {
          return `${validate_component(CalendarMonthOutline, "CalendarMonthOutline").$$render($$result, { slot: "left", size: "md" }, {}, {})}`;
        }
      })}</div></div></div> ${validate_component(Chart, "Chart").$$render($$result, { options }, {}, {})} <div class="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6">${validate_component(LastRange, "LastRange").$$render($$result, {}, {}, {})} ${validate_component(More, "More").$$render($$result, { title: "Sales Report", href: "#top" }, {}, {})}</div>`;
    }
  })}`;
});
const Insights = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = [{}, {}, {}];
  return `${validate_component(Card, "Card").$$render($$result, { size: "xl" }, {}, {
    default: () => {
      return `${validate_component(Carousel, "Carousel").$$render($$result, { images: items, class: "flex h-full" }, {}, {
        slide: ({ index }) => {
          return `<div slot="slide">${index == 0 ? `<div class="h-full"><div class="mb-4 flex items-center gap-2 text-lg font-medium text-primary-600">${validate_component(LayersSolid, "LayersSolid").$$render($$result, {}, {}, {})}<span data-svelte-h="svelte-zknlx3">Insights</span></div> <h3 class="mb-4 text-2xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-puc2vm">You are going to grow by 44% next year</h3> <p class="mb-4 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-11fa5tz">Get started with a free and open-source admin dashboard layout built with Tailwind CSS
						and Flowbite featuring charts, widgets, CRUD layouts, authentication pages, and more</p> <p class="mb-2 text-lg font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-p0lc2e">Key Takeaways:</p> <ul class="mb-4 list-disc space-y-3 pl-4 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-uosoi2"><li>What are the new challenges in the delivery industry due to new consumer expectations.</li> <li>How the online delivery business model is diversifying to meet new demands.</li> <li>Which new technology requirements must be met to ensure true retail experiences.</li></ul></div>` : `${index == 1 ? `<div class="h-full"><div class="mb-4 flex items-center text-lg font-medium text-teal-500">${validate_component(RocketSolid, "RocketSolid").$$render($$result, { class: "me-2" }, {}, {})} Tips to grow</div> <p class="mb-4 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1bz925v">Marketing, sales &amp; business growth for small business. Improve your marketing &amp;
						promotion results - and grow your sales!</p> <p class="mb-4 text-lg font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-1pc0ozj">What you&#39;ll learn:</p> <ul role="list" class="mb-4 list-disc space-y-3 pl-2 text-gray-500 dark:text-gray-400"><li class="flex items-center space-x-2">${validate_component(CheckOutline, "CheckOutline").$$render($$result, { size: "lg" }, {}, {})} <span class="leading-tight" data-svelte-h="svelte-1yncrtm">Dynamic reports and dashboards</span></li> <li class="flex space-x-2">${validate_component(CheckOutline, "CheckOutline").$$render($$result, { size: "lg" }, {}, {})} <span class="leading-tight" data-svelte-h="svelte-72v3q3">Learn from competitors about what to do, and not to do</span></li> <li class="flex space-x-2">${validate_component(CheckOutline, "CheckOutline").$$render($$result, { size: "lg" }, {}, {})} <span class="leading-tight" data-svelte-h="svelte-1jwvn40">Take their business to the next level</span></li> <li class="flex space-x-2">${validate_component(CheckOutline, "CheckOutline").$$render($$result, { size: "lg" }, {}, {})} <span class="leading-tight" data-svelte-h="svelte-ruqo7b">Limitless business automation</span></li> <li class="flex space-x-2">${validate_component(CheckOutline, "CheckOutline").$$render($$result, { size: "lg" }, {}, {})} <span class="leading-tight" data-svelte-h="svelte-1ymmlls">Build relationships with other businesses to co-promote</span></li> <li class="flex space-x-2">${validate_component(CheckOutline, "CheckOutline").$$render($$result, { size: "lg" }, {}, {})} <span class="leading-tight" data-svelte-h="svelte-lu4gfw">Make their customers feel loved and apprecaited</span></li></ul> <a href="#top" class="inline-flex items-center rounded-lg p-2 font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">Let&#39;s start ${validate_component(ArrowRightOutline, "ArrowRightOutline").$$render($$result, { size: "sm", class: "ms-2" }, {}, {})}</a></div>` : `<div class="h-full"><div class="mb-4 flex items-center text-lg font-medium text-purple-600">${validate_component(FireSolid, "FireSolid").$$render($$result, { class: "me-2" }, {}, {})}Features</div> <h3 class="mb-4 text-2xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-ibxug2">Go next level with Flowbite</h3> <p class="text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1wf2vh7">Deliver great service experiences fast - without the complexity of traditional ITSM
						solutions.Accelerate critical development work, eliminate toil, and deploy changes with
						ease.</p>  <ul role="list" class="my-5 mb-4 list-disc space-y-3 pl-2 text-gray-500 dark:text-gray-400"><li class="flex items-center space-x-3">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render(
            $$result,
            {
              class: "text-purple-600 dark:text-purple-500",
              size: "sm"
            },
            {},
            {}
          )} <span class="leading-tight" data-svelte-h="svelte-1yncrtm">Dynamic reports and dashboards</span></li> <li class="flex items-center space-x-3">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render(
            $$result,
            {
              class: "text-purple-600 dark:text-purple-500",
              size: "sm"
            },
            {},
            {}
          )} <span class="leading-tight" data-svelte-h="svelte-1qxzsbf">Templates for everyone</span></li> <li class="flex items-center space-x-3">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render(
            $$result,
            {
              class: "text-purple-600 dark:text-purple-500",
              size: "sm"
            },
            {},
            {}
          )} <span class="leading-tight" data-svelte-h="svelte-1w1tdk8">Development workflow</span></li> <li class="flex items-center space-x-3">${validate_component(CheckCircleSolid, "CheckCircleSolid").$$render(
            $$result,
            {
              class: "text-purple-600 dark:text-purple-500",
              size: "sm"
            },
            {},
            {}
          )} <span class="leading-tight" data-svelte-h="svelte-ruqo7b">Limitless business automation</span></li></ul> ${validate_component(Button, "Button").$$render($$result, { color: "alternative", size: "sm" }, {}, {
            default: () => {
              return `View more ${validate_component(ArrowRightOutline, "ArrowRightOutline").$$render($$result, { size: "sm", class: "ms-2" }, {}, {})}`;
            }
          })}</div>`}`}</div>`;
        },
        default: ({ Controls: Controls2 }) => {
          return `${validate_component(Controls2, "Controls").$$render($$result, {}, {}, {
            default: ({ changeSlide }) => {
              return `<div class="-mt-2 flex items-center justify-center gap-5"><button>${validate_component(ArrowLeftOutline, "ArrowLeftOutline").$$render($$result, { size: "lg" }, {}, {})}</button> <button>${validate_component(ArrowRightOutline, "ArrowRightOutline").$$render($$result, { size: "lg" }, {}, {})}</button></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
const getTrafficChannelsChartConfig = (dark) => {
  let trafficChannelsChartColors = { strokeColor: "#ffffff" };
  if (dark) {
    trafficChannelsChartColors = {
      strokeColor: "#1f2937"
    };
  } else {
    trafficChannelsChartColors = {
      strokeColor: "#ffffff"
    };
  }
  return {
    series: [70, 5, 25],
    labels: ["Desktop", "Tablet", "Phone"],
    colors: ["#16BDCA", "#FDBA8C", "#1A56DB"],
    chart: {
      type: "donut",
      height: 400,
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false
      }
    },
    responsive: [
      {
        breakpoint: 430,
        options: {
          chart: {
            height: 300
          }
        }
      }
    ],
    stroke: {
      colors: [trafficChannelsChartColors.strokeColor]
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.9
        }
      }
    },
    tooltip: {
      shared: true,
      followCursor: false,
      fillSeriesColor: false,
      inverseOrder: true,
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif"
      },
      x: {
        show: true,
        formatter: function(_, { seriesIndex, w }) {
          const label = w.config.labels[seriesIndex];
          return label;
        }
      },
      y: {
        formatter: function(value) {
          return value + "%";
        }
      }
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    }
  };
};
const SmallPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle = "" } = $$props;
  let { change = 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0) $$bindings.subtitle(subtitle);
  if ($$props.change === void 0 && $$bindings.change && change !== void 0) $$bindings.change(change);
  return `<div>${slots.icon ? slots.icon({}) : ``} <h3 class="text-gray-500 dark:text-gray-400">${escape(title)}</h3> <h4 class="text-xl font-bold dark:text-white">${escape(subtitle)}</h4> ${change ? `${validate_component(Change, "Change").$$render(
    $$result,
    {
      value: change,
      size: "sm",
      equalHeight: true
    },
    {},
    {}
  )}` : ``}</div>`;
});
const Traffic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dark = false } = $$props;
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0) $$bindings.dark(dark);
  return `${validate_component(Card, "Card").$$render($$result, { size: "xl", class: "h-fit" }, {}, {
    default: () => {
      return `<div class="mb-4 items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700 sm:flex"><div class="mb-4 w-full sm:mb-0" data-svelte-h="svelte-un9k2p"><h3 class="text-base font-normal text-gray-500 dark:text-gray-400">Traffic by device</h3> <span class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">Desktop</span></div> ${validate_component(More, "More").$$render($$result, { title: "Full report", href: "#top" }, {}, {})}</div> ${validate_component(Chart, "Chart").$$render($$result, { options: getTrafficChannelsChartConfig(dark) }, {}, {})} <div class="mb-4 flex items-center justify-between pt-4 sm:pt-6 lg:justify-evenly">${validate_component(SmallPanel, "SmallPanel").$$render(
        $$result,
        {
          title: "Desktop",
          subtitle: "234k",
          change: 4
        },
        {},
        {
          icon: () => {
            return `${validate_component(DesktopPcOutline, "DesktopPcOutline").$$render($$result, { slot: "icon", size: "xl", class: "mb-1" }, {}, {})}`;
          }
        }
      )} ${validate_component(SmallPanel, "SmallPanel").$$render(
        $$result,
        {
          title: "Phone",
          subtitle: "94k",
          change: -1
        },
        {},
        {
          icon: () => {
            return `${validate_component(MobilePhoneOutline, "MobilePhoneOutline").$$render($$result, { slot: "icon", size: "xl", class: "mb-1" }, {}, {})}`;
          }
        }
      )} ${validate_component(SmallPanel, "SmallPanel").$$render(
        $$result,
        {
          title: "Tablet",
          subtitle: "16k",
          change: -0.6
        },
        {},
        {
          icon: () => {
            return `${validate_component(TabletOutline, "TabletOutline").$$render($$result, { slot: "icon", size: "xl", class: "mb-1" }, {}, {})}`;
          }
        }
      )}</div>`;
    }
  })}`;
});
const CreditCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type;
  let { number } = $$props;
  if ($$props.number === void 0 && $$bindings.number && number !== void 0) $$bindings.number(number);
  type = number % 2 ? "visa" : "master";
  return `${type === "master" ? `<svg class="h-7 w-7" aria-hidden="true" enable-background="new 0 0 780 500" viewBox="0 0 780 500" xmlns="http://www.w3.org/2000/svg"><path d="m449.01 250c0 99.143-80.371 179.5-179.51 179.5s-179.5-80.361-179.5-179.5c0-99.133 80.362-179.5 179.5-179.5 99.137 0 179.51 80.371 179.51 179.5" fill="#d9222a"></path><path d="m510.49 70.496c-46.379 0-88.643 17.596-120.5 46.467-6.49 5.889-12.548 12.237-18.125 18.996h36.267c4.965 6.037 9.536 12.387 13.685 19.012h-63.635c-3.827 6.122-7.281 12.469-10.342 19.008h84.313c2.894 6.185 5.431 12.53 7.601 19.004h-99.513c-2.09 6.234-3.832 12.58-5.217 19.008h109.94c2.689 12.49 4.045 25.231 4.042 38.008 0 19.935-3.254 39.112-9.254 57.021h-99.513c2.164 6.477 4.7 12.824 7.596 19.008h84.316c-3.063 6.541-6.519 12.889-10.347 19.013h-63.625c4.147 6.62 8.719 12.966 13.685 18.996h36.259c-5.57 6.772-11.63 13.127-18.13 19.013 31.857 28.866 74.117 46.454 120.5 46.454 99.139 0 179.51-80.361 179.51-179.5 0-99.129-80.371-179.5-179.51-179.5" fill="#ee9f2d"></path><path d="m666.07 350.06c0-3.199 2.592-5.801 5.796-5.801s5.796 2.602 5.796 5.801-2.592 5.801-5.796 5.801-5.796-2.602-5.796-5.801zm5.796 4.408c2.434-.001 4.407-1.974 4.408-4.408 0-2.432-1.971-4.402-4.402-4.404h-.006c-2.429-.003-4.4 1.963-4.404 4.391v.014c-.002 2.433 1.968 4.406 4.4 4.408.001-.001.003-.001.004-.001zm-.783-1.86h-1.187v-5.096h2.149c.45 0 .908 0 1.305.254.413.279.646.771.646 1.279 0 .571-.338 1.104-.884 1.312l.938 2.25h-1.315l-.779-2.017h-.871zm0-2.89h.658c.246 0 .505.021.726-.1.195-.125.296-.359.296-.584-.005-.209-.112-.402-.288-.518-.207-.129-.536-.101-.758-.101h-.634zm-443.5-80.063c-2.046-.238-2.945-.301-4.35-.301-11.046 0-16.638 3.787-16.638 11.268 0 4.611 2.729 7.545 6.987 7.545 7.939 0 13.659-7.559 14.001-18.512zm14.171 32.996h-16.146l.371-7.676c-4.926 6.065-11.496 8.949-20.426 8.949-10.563 0-17.804-8.25-17.804-20.229 0-18.024 12.596-28.541 34.217-28.541 2.208 0 5.042.199 7.941.57.604-2.441.763-3.488.763-4.801 0-4.908-3.396-6.737-12.5-6.737-9.533-.108-17.396 2.271-20.625 3.333.204-1.229 2.7-16.659 2.7-16.659 9.712-2.846 16.116-3.917 23.325-3.917 16.732 0 25.596 7.513 25.579 21.712.033 3.805-.597 8.5-1.579 14.671-1.691 10.734-5.32 33.721-5.816 39.325zm-62.158 0h-19.487l11.162-69.997-24.925 69.997h-13.279l-1.642-69.597-11.733 69.597h-18.242l15.237-91.056h28.021l1.7 50.968 17.092-50.968h31.167zm354.97-32.996c-2.037-.238-2.941-.301-4.342-.301-11.041 0-16.634 3.787-16.634 11.268 0 4.611 2.726 7.545 6.983 7.545 7.94 0 13.664-7.559 13.993-18.512zm14.184 32.996h-16.146l.366-7.676c-4.926 6.065-11.5 8.949-20.422 8.949-10.565 0-17.8-8.25-17.8-20.229 0-18.024 12.588-28.541 34.213-28.541 2.208 0 5.037.199 7.934.57.604-2.441.763-3.488.763-4.801 0-4.908-3.392-6.737-12.496-6.737-9.533-.108-17.387 2.271-20.629 3.333.204-1.229 2.709-16.659 2.709-16.659 9.712-2.846 16.112-3.917 23.313-3.917 16.74 0 25.604 7.513 25.587 21.712.032 3.805-.597 8.5-1.579 14.671-1.684 10.734-5.321 33.721-5.813 39.325zm-220.39-1.125c-5.333 1.679-9.491 2.398-14 2.398-9.962 0-15.399-5.725-15.399-16.267-.142-3.271 1.433-11.88 2.671-19.737 1.125-6.917 8.449-50.529 8.449-50.529h19.371l-2.263 11.208h11.699l-2.642 17.796h-11.742c-2.25 14.083-5.454 31.625-5.491 33.95 0 3.816 2.037 5.483 6.671 5.483 2.221 0 3.94-.227 5.254-.7zm59.392-.6c-6.654 2.034-13.075 3.017-19.879 3-21.684-.021-32.987-11.346-32.987-33.032 0-25.313 14.38-43.947 33.899-43.947 15.971 0 26.171 10.433 26.171 26.796 0 5.429-.7 10.729-2.388 18.212h-38.574c-1.305 10.741 5.57 15.217 16.837 15.217 6.935 0 13.188-1.429 20.142-4.663zm-10.888-43.9c.107-1.543 2.055-13.217-9.013-13.217-6.171 0-10.583 4.704-12.38 13.217zm-123.42-5.017c0 9.367 4.542 15.826 14.842 20.676 7.892 3.709 9.112 4.81 9.112 8.17 0 4.617-3.479 6.701-11.191 6.701-5.813 0-11.221-.908-17.458-2.922 0 0-2.563 16.321-2.68 17.102 4.43.967 8.38 1.861 20.279 2.19 20.563 0 30.059-7.829 30.059-24.75 0-10.175-3.976-16.146-13.737-20.634-8.171-3.75-9.108-4.587-9.108-8.045 0-4.004 3.237-6.046 9.537-6.046 3.825 0 9.05.408 14 1.112l2.775-17.175c-5.046-.8-12.696-1.442-17.15-1.442-21.801.001-29.347 11.388-29.28 25.063m229.09-23.116c5.412 0 10.458 1.421 17.412 4.921l3.188-19.763c-2.854-1.121-12.904-7.7-21.417-7.7-13.041 0-24.065 6.471-31.82 17.15-11.309-3.746-15.958 3.825-21.657 11.367l-5.063 1.179c.383-2.483.729-4.95.612-7.446h-17.896c-2.445 22.917-6.778 46.128-10.171 69.075l-.884 4.976h19.496c3.254-21.143 5.037-34.68 6.121-43.842l7.341-4.084c1.097-4.078 4.529-5.458 11.417-5.291-.926 5.008-1.389 10.091-1.383 15.184 0 24.225 13.07 39.308 34.05 39.308 5.404 0 10.041-.712 17.221-2.658l3.43-20.759c-6.458 3.181-11.759 4.677-16.559 4.677-11.329 0-18.184-8.363-18.184-22.185 0-20.051 10.196-34.109 24.746-34.109"></path><path d="m185.21 297.24h-19.491l11.171-69.988-24.926 69.988h-13.283l-1.642-69.588-11.733 69.588h-18.241l15.237-91.042h28.021l.788 56.362 18.904-56.362h30.267z" fill="#fff"></path><path d="m647.52 211.6-4.321 26.309c-5.329-7.013-11.054-12.088-18.612-12.088-9.833 0-18.783 7.455-24.642 18.425-8.158-1.692-16.597-4.563-16.597-4.563l-.004.067c.658-6.134.921-9.875.862-11.146h-17.9c-2.438 22.917-6.771 46.128-10.157 69.075l-.893 4.976h19.492c2.633-17.096 4.648-31.291 6.133-42.551 6.658-6.016 9.992-11.266 16.721-10.916-2.979 7.205-4.725 15.503-4.725 24.017 0 18.513 9.366 30.725 23.533 30.725 7.142 0 12.621-2.462 17.967-8.171l-.913 6.884h18.435l14.842-91.042zm-24.371 73.941c-6.634 0-9.983-4.908-9.983-14.596 0-14.555 6.271-24.875 15.112-24.875 6.695 0 10.32 5.104 10.32 14.509.001 14.679-6.37 24.962-15.449 24.962z"></path><path d="m233.19 264.26c-2.042-.236-2.946-.299-4.346-.299-11.046 0-16.634 3.787-16.634 11.266 0 4.604 2.729 7.547 6.979 7.547 7.947-.001 13.668-7.559 14.001-18.514zm14.178 32.984h-16.146l.367-7.663c-4.921 6.054-11.5 8.95-20.421 8.95-10.567 0-17.805-8.25-17.805-20.229 0-18.032 12.592-28.542 34.217-28.542 2.208 0 5.042.2 7.938.571.604-2.441.763-3.487.763-4.808 0-4.909-3.392-6.729-12.496-6.729-9.537-.108-17.396 2.271-20.629 3.321.204-1.225 2.7-16.637 2.7-16.637 9.708-2.858 16.12-3.929 23.32-3.929 16.737 0 25.604 7.517 25.588 21.704.029 3.821-.604 8.513-1.584 14.675-1.687 10.724-5.319 33.724-5.812 39.316zm261.38-88.592-3.191 19.767c-6.95-3.496-12-4.92-17.407-4.92-14.551 0-24.75 14.058-24.75 34.106 0 13.821 6.857 22.181 18.184 22.181 4.8 0 10.096-1.492 16.554-4.675l-3.421 20.75c-7.184 1.957-11.816 2.67-17.225 2.67-20.977 0-34.051-15.084-34.051-39.309 0-32.55 18.059-55.3 43.888-55.3 8.507.001 18.561 3.609 21.419 4.73m31.443 55.608c-2.041-.236-2.941-.299-4.347-.299-11.041 0-16.633 3.787-16.633 11.266 0 4.604 2.729 7.547 6.983 7.547 7.938-.001 13.663-7.559 13.997-18.514zm14.178 32.984h-16.15l.371-7.663c-4.925 6.054-11.5 8.95-20.421 8.95-10.563 0-17.804-8.25-17.804-20.229 0-18.032 12.596-28.542 34.212-28.542 2.213 0 5.042.2 7.941.571.601-2.441.763-3.487.763-4.808 0-4.909-3.393-6.729-12.495-6.729-9.533-.108-17.396 2.271-20.63 3.321.204-1.225 2.704-16.637 2.704-16.637 9.709-2.858 16.116-3.929 23.316-3.929 16.741 0 25.604 7.517 25.583 21.704.033 3.821-.596 8.513-1.579 14.675-1.682 10.724-5.323 33.724-5.811 39.316zm-220.39-1.121c-5.338 1.679-9.496 2.408-14 2.408-9.962 0-15.399-5.726-15.399-16.268-.138-3.279 1.438-11.88 2.675-19.736 1.12-6.926 8.445-50.534 8.445-50.534h19.368l-2.26 11.212h9.941l-2.646 17.788h-9.975c-2.25 14.092-5.463 31.62-5.496 33.95 0 3.83 2.041 5.482 6.671 5.482 2.221 0 3.938-.216 5.254-.691zm59.391-.592c-6.65 2.033-13.079 3.012-19.879 3-21.685-.021-32.987-11.346-32.987-33.033 0-25.321 14.379-43.95 33.899-43.95 15.971 0 26.171 10.429 26.171 26.8 0 5.434-.7 10.733-2.384 18.212h-38.574c-1.306 10.741 5.569 15.222 16.837 15.222 6.93 0 13.188-1.435 20.138-4.677zm-10.891-43.912c.116-1.538 2.06-13.217-9.013-13.217-6.167 0-10.579 4.717-12.375 13.217zm-123.42-5.005c0 9.367 4.542 15.818 14.842 20.675 7.892 3.709 9.112 4.812 9.112 8.172 0 4.616-3.483 6.699-11.188 6.699-5.816 0-11.225-.908-17.467-2.921 0 0-2.554 16.321-2.671 17.101 4.421.967 8.375 1.85 20.275 2.191 20.566 0 30.059-7.829 30.059-24.746 0-10.18-3.971-16.15-13.737-20.637-8.167-3.759-9.113-4.584-9.113-8.046 0-4 3.246-6.059 9.542-6.059 3.821 0 9.046.421 14.004 1.125l2.771-17.179c-5.042-.8-12.692-1.441-17.146-1.441-21.804 0-29.346 11.379-29.283 25.066m398.45 50.63h-18.438l.917-6.893c-5.347 5.717-10.825 8.18-17.968 8.18-14.166 0-23.528-12.213-23.528-30.726 0-24.63 14.521-45.392 31.708-45.392 7.559 0 13.279 3.087 18.604 10.096l4.325-26.308h19.221zm-28.746-17.109c9.075 0 15.45-10.283 15.45-24.953 0-9.405-3.629-14.509-10.325-14.509-8.837 0-15.115 10.315-15.115 24.875-.001 9.686 3.357 14.587 9.99 14.587zm-56.842-56.929c-2.441 22.917-6.773 46.13-10.162 69.063l-.892 4.976h19.491c6.972-45.275 8.658-54.117 19.588-53.009 1.742-9.267 4.982-17.383 7.399-21.479-8.163-1.7-12.721 2.913-18.688 11.675.471-3.788 1.333-7.467 1.162-11.225zm-160.42 0c-2.446 22.917-6.779 46.13-10.167 69.063l-.888 4.976h19.5c6.963-45.275 8.646-54.117 19.57-53.009 1.75-9.267 4.991-17.383 7.399-21.479-8.154-1.7-12.717 2.913-18.679 11.675.471-3.788 1.324-7.467 1.162-11.225zm254.57 68.241c-.004-3.199 2.586-5.795 5.784-5.799h.012c3.197-.004 5.793 2.586 5.796 5.783v.016c-.001 3.201-2.595 5.795-5.796 5.797-3.201-.002-5.795-2.596-5.796-5.797zm5.796 4.405c2.431.002 4.402-1.969 4.403-4.399v-.004c.003-2.433-1.968-4.406-4.399-4.408h-.004c-2.435.001-4.407 1.974-4.408 4.408.002 2.432 1.975 4.403 4.408 4.403zm-.784-1.871h-1.188v-5.082h2.153c.446 0 .909.009 1.296.254.417.283.654.767.654 1.274 0 .575-.337 1.112-.888 1.317l.941 2.236h-1.32l-.779-2.009h-.87zm0-2.879h.653c.246 0 .513.019.729-.1.196-.125.296-.361.296-.588-.009-.21-.114-.404-.287-.523-.204-.117-.542-.084-.763-.084h-.629z" fill="#fff"></path></svg>` : ``} ${type === "visa" ? `<svg class="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 83"><defs><linearGradient id="logosVisa0" x1="45.974%" x2="54.877%" y1="-2.006%" y2="100%"><stop offset="0%" stop-color="#222357"></stop><stop offset="100%" stop-color="#254AA5"></stop></linearGradient></defs><path fill="url(#logosVisa0)" d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963h-17.665m3.037-21.601l6.265-30.027h-17.158l10.893 30.027m-118.599 21.6L88.964 1.246h20.687l17.104 79.963h-20.679m-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963H75.473" transform="matrix(1 0 0 -1 0 82.668)"></path></svg>` : ``}`;
});
const StatusBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { state } = $$props;
  let { dark = false } = $$props;
  const states = {
    completed: "Completed",
    cancelled: "Canceled",
    inreview: "In review",
    inprogress: "In progress"
  };
  const colors = {
    completed: "green",
    cancelled: "red",
    inreview: "yellow",
    inprogress: "purple"
  };
  if ($$props.state === void 0 && $$bindings.state && state !== void 0) $$bindings.state(state);
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0) $$bindings.dark(dark);
  return `${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      color: colors[state] ?? "dark",
      border: dark
    },
    {},
    {
      default: () => {
        return `${escape(states[state] ?? "Unknown")}`;
      }
    }
  )}`;
});
const Transactions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dark = false } = $$props;
  const headers = [
    "Transaction",
    "Date & Time",
    "Amount",
    "Reference number",
    "Payment method",
    "Status"
  ];
  const data = [
    [
      "Payment from Bonnie Green",
      "Apr 23 ,2021",
      "$2300",
      "0047568936",
      475,
      "completed"
    ],
    [
      "Payment refund to #00910",
      "Apr 23 ,2021",
      "-$670",
      "0078568936",
      924,
      "completed"
    ],
    [
      "Payment failed from #087651",
      "Apr 18 ,2021",
      "$234",
      "0088568934",
      826,
      "cancelled"
    ],
    [
      "Payment from Lana Byrd",
      "Apr 15 ,2021",
      "$5000",
      "0018568911",
      634,
      "inprogress"
    ],
    [
      "Payment from Jese Leos",
      "Apr 15 ,2021",
      "$2300",
      "0045568939",
      163,
      "completed"
    ],
    [
      "Refund to THEMESBERG LLC",
      "Apr 11 ,2021",
      "-$560",
      "0031568935",
      443,
      "inreview"
    ],
    [
      "Payment from Lana Lysle",
      "Apr 6 ,2021",
      "$1437",
      "0023568934",
      223,
      "inreview"
    ],
    [
      "Payment to Joseph Mcfall",
      "Apr 1 ,2021",
      "$980",
      "0057568935",
      362,
      "completed"
    ],
    [
      "Payment from Alphabet",
      "Mar 23 ,2021",
      "$11,436",
      "00836143841",
      772,
      "inprogress"
    ],
    [
      "Payment from Bonnie Green",
      "Mar 23 ,2021",
      "$560",
      "0031568935",
      123,
      "completed"
    ]
  ];
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0) $$bindings.dark(dark);
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      size: "xl",
      class: "shadow-sm max-w-none"
    },
    {},
    {
      default: () => {
        return `<div class="items-center justify-between lg:flex"><div class="mb-4 mt-px lg:mb-0">${validate_component(Heading, "Heading").$$render(
          $$result,
          {
            tag: "h3",
            class: "-ml-0.25 mb-2 text-xl font-semibold dark:text-white"
          },
          {},
          {
            default: () => {
              return `Transactions`;
            }
          }
        )} <span class="text-base font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-143kald">This is a list of latest transactions</span></div> <div class="items-center justify-between gap-3 space-y-4 sm:flex sm:space-y-0"><div class="flex items-center">${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "alternative",
            class: "w-fit whitespace-nowrap px-4 py-2"
          },
          {},
          {
            default: () => {
              return `Filter by status
					${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render($$result, { size: "lg" }, {}, {})}`;
            }
          }
        )} ${validate_component(Dropdown, "Dropdown").$$render(
          $$result,
          {
            class: "w-44 space-y-3 p-3 text-sm",
            placement: "bottom-start"
          },
          {},
          {
            default: () => {
              return `<li>${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "accent-primary-600" }, {}, {
                default: () => {
                  return `Completed (56)`;
                }
              })}</li> <li>${validate_component(Checkbox, "Checkbox").$$render($$result, { checked: true }, {}, {
                default: () => {
                  return `Cancelled (56)`;
                }
              })}</li> <li>${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "accent-primary-600" }, {}, {
                default: () => {
                  return `In progress (56)`;
                }
              })}</li> <li>${validate_component(Checkbox, "Checkbox").$$render($$result, { checked: true }, {}, {
                default: () => {
                  return `In review (97)`;
                }
              })}</li>`;
            }
          }
        )}</div> <div class="flex items-center space-x-4">${validate_component(Input, "Input").$$render($$result, { placeholder: "From", class: "w-full" }, {}, {
          left: () => {
            return `${validate_component(CalendarMonthOutline, "CalendarMonthOutline").$$render($$result, { slot: "left", size: "md" }, {}, {})}`;
          }
        })} ${validate_component(Input, "Input").$$render($$result, { placeholder: "To", class: "w-full" }, {}, {
          left: () => {
            return `${validate_component(CalendarMonthOutline, "CalendarMonthOutline").$$render($$result, { slot: "left", size: "md" }, {}, {})}`;
          }
        })}</div></div></div> ${validate_component(Table, "Table").$$render(
          $$result,
          {
            hoverable: true,
            noborder: true,
            striped: true,
            class: "mt-6 min-w-full divide-y divide-gray-200 dark:divide-gray-600"
          },
          {},
          {
            default: () => {
              return `${validate_component(TableHead, "TableHead").$$render($$result, { class: "bg-gray-50 dark:bg-gray-700" }, {}, {
                default: () => {
                  return `${each(headers, (header) => {
                    return `${validate_component(TableHeadCell, "TableHeadCell").$$render(
                      $$result,
                      {
                        class: "whitespace-nowrap p-4 font-normal"
                      },
                      {},
                      {
                        default: () => {
                          return `${escape(header)}`;
                        }
                      }
                    )}`;
                  })}`;
                }
              })} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                default: () => {
                  return `${each(data, ([name, date, amount, reference, method, status]) => {
                    return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "px-4 font-normal" }, {}, {
                          default: () => {
                            return `${escape(name)}`;
                          }
                        })} ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                          $$result,
                          {
                            class: "px-4 font-normal text-gray-500 dark:text-gray-400"
                          },
                          {},
                          {
                            default: () => {
                              return `${escape(date)} `;
                            }
                          }
                        )} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "px-4" }, {}, {
                          default: () => {
                            return `${escape(amount)}`;
                          }
                        })} ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                          $$result,
                          {
                            class: "px-4 font-normal  text-gray-500 dark:text-gray-400"
                          },
                          {},
                          {
                            default: () => {
                              return `${escape(reference)} `;
                            }
                          }
                        )} ${validate_component(TableBodyCell, "TableBodyCell").$$render(
                          $$result,
                          {
                            class: "flex items-center gap-2 px-4 font-normal  text-gray-500 dark:text-gray-400"
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(CreditCard, "CreditCard").$$render($$result, { number: method }, {}, {})} <span>••• ${escape(method)}</span> `;
                            }
                          }
                        )} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "px-4 font-normal" }, {}, {
                          default: () => {
                            return `${validate_component(StatusBadge, "StatusBadge").$$render($$result, { state: status, dark }, {}, {})}`;
                          }
                        })} `;
                      }
                    })}`;
                  })}`;
                }
              })}`;
            }
          }
        )} <div class="-mb-1 flex items-center justify-between pt-3 sm:pt-6">${validate_component(LastRange, "LastRange").$$render($$result, {}, {}, {})} <a href="#top" class="inline-flex items-center rounded-lg p-1 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">Transactions report ${validate_component(ChevronRightOutline, "ChevronRightOutline").$$render($$result, { size: "lg" }, {}, {})}</a></div>`;
      }
    }
  )}`;
});
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let chartOptions = getChartOptions();
  chartOptions.series = data.series;
  let dark = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<div class="mt-px space-y-4"><div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">${validate_component(ChartWidget, "ChartWidget").$$render(
    $$result,
    {
      chartOptions,
      title: "$45,385",
      subtitle: "Sales this week"
    },
    {},
    {}
  )} ${validate_component(Stats, "Stats").$$render($$result, {}, {}, {})}</div> <div class="grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">${validate_component(Card, "Card").$$render(
    $$result,
    {
      horizontal: true,
      class: "items-center justify-between",
      size: "xl"
    },
    {},
    {
      default: () => {
        return `<div class="w-full"><p data-svelte-h="svelte-1l49jjm">New products</p> <p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl" data-svelte-h="svelte-1ivt5hb">2,340</p> ${validate_component(Change, "Change").$$render(
          $$result,
          {
            size: "sm",
            value: 12.5,
            since: "Since last month"
          },
          {},
          {}
        )}</div> ${validate_component(Chart, "Chart").$$render($$result, { options: thickbars, class: "w-full" }, {}, {})}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      horizontal: true,
      class: "items-center justify-between",
      size: "xl"
    },
    {},
    {
      default: () => {
        return `<div class="w-full"><p data-svelte-h="svelte-1gsaoko">Users</p> <p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl" data-svelte-h="svelte-127xezw">4,420</p> ${validate_component(Change, "Change").$$render(
          $$result,
          {
            size: "sm",
            value: -3.4,
            since: "Since last month"
          },
          {},
          {}
        )}</div> ${validate_component(DarkChart, "DarkChart").$$render($$result, { configFunc: users, class: "w-full" }, {}, {})}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      horizontal: true,
      class: "items-center justify-between",
      size: "xl"
    },
    {},
    {
      default: () => {
        return `<div class="w-full"><p data-svelte-h="svelte-1gsaoko">Users</p> <p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl" data-svelte-h="svelte-127xezw">4,420</p> ${validate_component(Change, "Change").$$render(
          $$result,
          {
            size: "sm",
            value: -3.4,
            since: "Since last month",
            class: "w-full"
          },
          {},
          {}
        )}</div> ${validate_component(DarkChart, "DarkChart").$$render(
          $$result,
          {
            configFunc: (d) => {
              const x = users(d);
              if (x.plotOptions?.bar) {
                x.plotOptions.bar.horizontal = true;
              } else {
                x.plotOptions = { bar: { horizontal: true } };
              }
              return x;
            },
            class: "w-full"
          },
          {},
          {}
        )}`;
      }
    }
  )}</div> <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">${validate_component(Chat, "Chat").$$render($$result, {}, {}, {})} <div class="flex flex-col gap-4">${validate_component(DesktopPc, "DesktopPc").$$render($$result, {}, {}, {})} ${validate_component(Traffic, "Traffic").$$render($$result, { dark }, {}, {})}</div></div> <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">${validate_component(ActivityList, "ActivityList").$$render($$result, {}, {}, {})} ${validate_component(Insights, "Insights").$$render($$result, {}, {}, {})}</div> ${validate_component(Transactions, "Transactions").$$render($$result, { dark }, {}, {})}</div>`;
});
export {
  Dashboard as D
};
