import { c as create_ssr_component, a as compute_rest_props, l as setContext, f as add_attribute, b as spread, d as escape_object, e as escape_attribute_value, g as getContext, s as subscribe, k as each } from "./ssr.js";
import { w as writable } from "./index2.js";
import { twMerge, twJoin } from "tailwind-merge";
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "divClass",
    "striped",
    "hoverable",
    "noborder",
    "shadow",
    "color",
    "customeColor",
    "items",
    "filter",
    "placeholder",
    "innerDivClass",
    "searchClass",
    "svgDivClass",
    "svgClass",
    "inputClass"
  ]);
  let { divClass = "relative overflow-x-auto" } = $$props;
  let { striped = false } = $$props;
  let { hoverable = false } = $$props;
  let { noborder = false } = $$props;
  let { shadow = false } = $$props;
  let { color = "default" } = $$props;
  let { customeColor = "" } = $$props;
  let { items = [] } = $$props;
  let { filter = null } = $$props;
  let { placeholder = "Search" } = $$props;
  let { innerDivClass = "p-4" } = $$props;
  let { searchClass = "relative mt-1" } = $$props;
  let { svgDivClass = "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" } = $$props;
  let { svgClass = "w-5 h-5 text-gray-500 dark:text-gray-400" } = $$props;
  let { inputClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" } = $$props;
  let searchTerm = "";
  let inputCls = twMerge(inputClass, $$props.classInput);
  let svgDivCls = twMerge(svgDivClass, $$props.classSvgDiv);
  const colors = {
    default: "text-gray-500 dark:text-gray-400",
    blue: "text-blue-100 dark:text-blue-100",
    green: "text-green-100 dark:text-green-100",
    red: "text-red-100 dark:text-red-100",
    yellow: "text-yellow-100 dark:text-yellow-100",
    purple: "text-purple-100 dark:text-purple-100",
    indigo: "text-indigo-100 dark:text-indigo-100",
    pink: "text-pink-100 dark:text-pink-100",
    custom: customeColor
  };
  const searchTermStore = writable(searchTerm);
  const filterStore = writable(filter);
  setContext("searchTerm", searchTermStore);
  setContext("filter", filterStore);
  setContext("sorter", writable(null));
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);
  if ($$props.striped === void 0 && $$bindings.striped && striped !== void 0) $$bindings.striped(striped);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0) $$bindings.hoverable(hoverable);
  if ($$props.noborder === void 0 && $$bindings.noborder && noborder !== void 0) $$bindings.noborder(noborder);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.customeColor === void 0 && $$bindings.customeColor && customeColor !== void 0) $$bindings.customeColor(customeColor);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0) $$bindings.filter(filter);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.innerDivClass === void 0 && $$bindings.innerDivClass && innerDivClass !== void 0) $$bindings.innerDivClass(innerDivClass);
  if ($$props.searchClass === void 0 && $$bindings.searchClass && searchClass !== void 0) $$bindings.searchClass(searchClass);
  if ($$props.svgDivClass === void 0 && $$bindings.svgDivClass && svgDivClass !== void 0) $$bindings.svgDivClass(svgDivClass);
  if ($$props.svgClass === void 0 && $$bindings.svgClass && svgClass !== void 0) $$bindings.svgClass(svgClass);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0) $$bindings.inputClass(inputClass);
  {
    setContext("striped", striped);
  }
  {
    setContext("hoverable", hoverable);
  }
  {
    setContext("noborder", noborder);
  }
  {
    setContext("color", color);
  }
  {
    setContext("items", items);
  }
  {
    searchTermStore.set(searchTerm);
  }
  {
    {
      if (filter) filterStore.set(filter);
    }
  }
  return `<div${add_attribute("class", twJoin(divClass, shadow && "shadow-md sm:rounded-lg"), 0)}>${filter ? `${slots.search ? slots.search({}) : ` <div${add_attribute("class", innerDivClass, 0)}><label for="table-search" class="sr-only" data-svelte-h="svelte-1m8vpa4">Search</label> <div${add_attribute("class", searchClass, 0)}><div${add_attribute("class", svgDivCls, 0)}>${slots.svgSearch ? slots.svgSearch({}) : ` <svg${add_attribute("class", svgClass, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg> `}</div> <input type="text" id="table-search"${add_attribute("class", inputCls, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", searchTerm, 0)}></div> ${slots.header ? slots.header({}) : ``}</div> `}` : ``} <table${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("w-full text-left text-sm", colors[color], $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</table></div> `;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let filtered;
  let sorted;
  let $$restProps = compute_rest_props($$props, ["tableBodyClass"]);
  let $sorter, $$unsubscribe_sorter;
  let $searchTerm, $$unsubscribe_searchTerm;
  let $filter, $$unsubscribe_filter;
  let { tableBodyClass = void 0 } = $$props;
  let filter = getContext("filter");
  $$unsubscribe_filter = subscribe(filter, (value) => $filter = value);
  let searchTerm = getContext("searchTerm");
  $$unsubscribe_searchTerm = subscribe(searchTerm, (value) => $searchTerm = value);
  let sorter = getContext("sorter");
  $$unsubscribe_sorter = subscribe(sorter, (value) => $sorter = value);
  if ($$props.tableBodyClass === void 0 && $$bindings.tableBodyClass && tableBodyClass !== void 0) $$bindings.tableBodyClass(tableBodyClass);
  items = getContext("items") || [];
  filtered = $filter ? items.filter((item) => $filter(item, $searchTerm)) : items;
  sorted = $sorter ? filtered.toSorted((a, b) => $sorter.sortDirection * $sorter.sort(a, b)) : filtered;
  $$unsubscribe_sorter();
  $$unsubscribe_searchTerm();
  $$unsubscribe_filter();
  return `<tbody${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(tableBodyClass)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``} ${each(sorted, (item) => {
    return `${slots.row ? slots.row({ item }) : ``}`;
  })}</tbody> `;
});
const TableBodyCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tdClass"]);
  let { tdClass = "px-6 py-4 whitespace-nowrap font-medium " } = $$props;
  let color = "default";
  color = getContext("color");
  let tdClassfinal;
  if ($$props.tdClass === void 0 && $$bindings.tdClass && tdClass !== void 0) $$bindings.tdClass(tdClass);
  tdClassfinal = twMerge(
    tdClass,
    color === "default" ? "text-gray-900 dark:text-white" : "text-blue-50 whitespace-nowrap dark:text-blue-100",
    $$props.class
  );
  return `<td${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(tdClassfinal)
      }
    ],
    {}
  )}>${$$props.onclick ? `<button>${slots.default ? slots.default({}) : ``}</button>` : `${slots.default ? slots.default({}) : ``}`}</td> `;
});
const TableBodyRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color"]);
  let { color = getContext("color") } = $$props;
  const colors = {
    default: "bg-white dark:bg-gray-800 dark:border-gray-700",
    blue: "bg-blue-500 border-blue-400",
    green: "bg-green-500 border-green-400",
    red: "bg-red-500 border-red-400",
    yellow: "bg-yellow-500 border-yellow-400",
    purple: "bg-purple-500 border-purple-400",
    custom: ""
  };
  const hoverColors = {
    default: "hover:bg-gray-50 dark:hover:bg-gray-600",
    blue: "hover:bg-blue-400",
    green: "hover:bg-green-400",
    red: "hover:bg-red-400",
    yellow: "hover:bg-yellow-400",
    purple: "hover:bg-purple-400",
    custom: ""
  };
  const stripColors = {
    default: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
    blue: "odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700",
    green: "odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700",
    red: "odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700",
    yellow: "odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700",
    purple: "odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700",
    custom: ""
  };
  let trClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  trClass = twMerge([
    !getContext("noborder") && "border-b last:border-b-0",
    colors[color],
    getContext("hoverable") && hoverColors[color],
    getContext("striped") && stripColors[color],
    $$props.class
  ]);
  return `<tr${spread([escape_object($$restProps), { class: escape_attribute_value(trClass) }], {})}>${slots.default ? slots.default({}) : ``}</tr> `;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theadClassfinal;
  let $$restProps = compute_rest_props($$props, ["theadClass", "defaultRow"]);
  let { theadClass = "text-xs uppercase" } = $$props;
  let { defaultRow = true } = $$props;
  let color;
  color = getContext("color");
  let noborder = getContext("noborder");
  let striped = getContext("striped");
  let defaultBgColor = noborder || striped ? "" : "bg-gray-50 dark:bg-gray-700";
  const bgColors = {
    default: defaultBgColor,
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600",
    yellow: "bg-yellow-600",
    purple: "bg-purple-600",
    custom: ""
  };
  let textColor = color === "default" ? "text-gray-700 dark:text-gray-400" : color === "custom" ? "" : "text-white  dark:text-white";
  let borderColors = striped ? "" : color === "default" ? "border-gray-700" : color === "custom" ? "" : `border-${color}-400`;
  if ($$props.theadClass === void 0 && $$bindings.theadClass && theadClass !== void 0) $$bindings.theadClass(theadClass);
  if ($$props.defaultRow === void 0 && $$bindings.defaultRow && defaultRow !== void 0) $$bindings.defaultRow(defaultRow);
  theadClassfinal = twMerge(theadClass, textColor, striped && borderColors, bgColors[color], $$props.class);
  return `<thead${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(theadClassfinal)
      }
    ],
    {}
  )}>${defaultRow ? `<tr>${slots.default ? slots.default({}) : ``}</tr>` : `${slots.default ? slots.default({}) : ``}`}</thead> `;
});
const TableHeadCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["padding", "sort", "defaultDirection", "defaultSort", "direction"]);
  let $sorter, $$unsubscribe_sorter;
  let { padding = "px-6 py-3" } = $$props;
  let { sort = null } = $$props;
  let { defaultDirection = "asc" } = $$props;
  let { defaultSort = false } = $$props;
  let { direction = defaultSort ? defaultDirection : null } = $$props;
  let sorter = getContext("sorter");
  $$unsubscribe_sorter = subscribe(sorter, (value) => $sorter = value);
  let sortId = Math.random().toString(36).substring(2);
  if (defaultSort) {
    sortItems();
  }
  function sortItems() {
    if (!sort || !sorter) return;
    sorter.update((sorter2) => {
      return {
        id: sortId,
        sort,
        sortDirection: sorter2?.id === sortId ? -sorter2.sortDirection : defaultDirection === "asc" ? 1 : -1
      };
    });
  }
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0) $$bindings.sort(sort);
  if ($$props.defaultDirection === void 0 && $$bindings.defaultDirection && defaultDirection !== void 0) $$bindings.defaultDirection(defaultDirection);
  if ($$props.defaultSort === void 0 && $$bindings.defaultSort && defaultSort !== void 0) $$bindings.defaultSort(defaultSort);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0) $$bindings.direction(direction);
  direction = $sorter?.id === sortId ? $sorter.sortDirection === 1 ? "asc" : "desc" : null;
  $$unsubscribe_sorter();
  return `${sort && sorter ? `<th${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value($$props.class)
      },
      {
        "aria-sort": escape_attribute_value(direction ? `${direction}ending` : void 0)
      }
    ],
    {}
  )}><button${add_attribute("class", twMerge("w-full text-left", "after:absolute after:pl-3", direction === "asc" && 'after:content-["▲"]', direction === "desc" && 'after:content-["▼"]', padding), 0)}>${slots.default ? slots.default({}) : ``}</button></th>` : `<th${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(padding, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</th>`} `;
});
export {
  Table as T,
  TableHead as a,
  TableHeadCell as b,
  TableBody as c,
  TableBodyRow as d,
  TableBodyCell as e
};
