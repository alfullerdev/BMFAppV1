import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { D as Dashboard } from "../../../chunks/Dashboard.js";
import { M as MetaTag } from "../../../chunks/MetaTag.js";
const path = "";
const description = "Admin Dashboard example using Flowbite Svelte";
const title = "Flowbite Svelte Admin Dashboard - Home";
const subtitle = "Admin Dashboard";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} <main class="p-4">${validate_component(Dashboard, "Dashboard").$$render($$result, { data }, {}, {})}</main>`;
});
export {
  Page as default
};