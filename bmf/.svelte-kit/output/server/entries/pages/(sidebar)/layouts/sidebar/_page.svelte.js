import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as Dashboard } from "../../../../../chunks/Dashboard.js";
import { M as MetaTag } from "../../../../../chunks/MetaTag.js";
import { F as Footer } from "../../../../../chunks/Footer.js";
const path = "/layouts/sidebar";
const description = "Sidebar layout examaple - Flowbite Svelte Admin Dashboard";
const title = "Flowbite Svelte Admin Dashboard - Sidebar Layout";
const subtitle = "Sidebar Layout";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} <main class="p-4">${validate_component(Dashboard, "Dashboard").$$render($$result, { data }, {}, {})}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
