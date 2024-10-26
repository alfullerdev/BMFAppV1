import { c as create_ssr_component, f as add_attribute, h as escape, v as validate_component } from "./ssr.js";
import { C as Checkbox, L as Label } from "./Checkbox.js";
import { I as Input } from "./Input.js";
import { B as Button } from "./Button.js";
import { C as Card } from "./Card.js";
import { A } from "./A.js";
import { M as MetaTag } from "./MetaTag.js";
const SignIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title: title2 = "Sign in to platform" } = $$props;
  let { site = {
    name: "Flowbite",
    img: "/images/flowbite-svelte-icon-logo.svg",
    link: "/",
    imgAlt: "FlowBite Logo"
  } } = $$props;
  let { rememberMe: rememberMe2 = true } = $$props;
  let { lostPassword: lostPassword2 = true } = $$props;
  let { createAccount: createAccount2 = true } = $$props;
  let { lostPasswordLink: lostPasswordLink2 = "" } = $$props;
  let { loginTitle: loginTitle2 = "Login to your account" } = $$props;
  let { registerLink: registerLink2 = "" } = $$props;
  let { createAccountTitle: createAccountTitle2 = "Create account" } = $$props;
  let { mainClass = "bg-gray-50 dark:bg-gray-900 w-full" } = $$props;
  let { mainDivClass = "flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900" } = $$props;
  let { siteLinkClass = "flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white" } = $$props;
  let { siteImgClass = "mr-4 h-11" } = $$props;
  let { cardH1Class = "text-2xl font-bold text-gray-900 dark:text-white" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
  if ($$props.site === void 0 && $$bindings.site && site !== void 0) $$bindings.site(site);
  if ($$props.rememberMe === void 0 && $$bindings.rememberMe && rememberMe2 !== void 0) $$bindings.rememberMe(rememberMe2);
  if ($$props.lostPassword === void 0 && $$bindings.lostPassword && lostPassword2 !== void 0) $$bindings.lostPassword(lostPassword2);
  if ($$props.createAccount === void 0 && $$bindings.createAccount && createAccount2 !== void 0) $$bindings.createAccount(createAccount2);
  if ($$props.lostPasswordLink === void 0 && $$bindings.lostPasswordLink && lostPasswordLink2 !== void 0) $$bindings.lostPasswordLink(lostPasswordLink2);
  if ($$props.loginTitle === void 0 && $$bindings.loginTitle && loginTitle2 !== void 0) $$bindings.loginTitle(loginTitle2);
  if ($$props.registerLink === void 0 && $$bindings.registerLink && registerLink2 !== void 0) $$bindings.registerLink(registerLink2);
  if ($$props.createAccountTitle === void 0 && $$bindings.createAccountTitle && createAccountTitle2 !== void 0) $$bindings.createAccountTitle(createAccountTitle2);
  if ($$props.mainClass === void 0 && $$bindings.mainClass && mainClass !== void 0) $$bindings.mainClass(mainClass);
  if ($$props.mainDivClass === void 0 && $$bindings.mainDivClass && mainDivClass !== void 0) $$bindings.mainDivClass(mainDivClass);
  if ($$props.siteLinkClass === void 0 && $$bindings.siteLinkClass && siteLinkClass !== void 0) $$bindings.siteLinkClass(siteLinkClass);
  if ($$props.siteImgClass === void 0 && $$bindings.siteImgClass && siteImgClass !== void 0) $$bindings.siteImgClass(siteImgClass);
  if ($$props.cardH1Class === void 0 && $$bindings.cardH1Class && cardH1Class !== void 0) $$bindings.cardH1Class(cardH1Class);
  return `<main${add_attribute("class", mainClass, 0)}><div${add_attribute("class", mainDivClass, 0)}><a${add_attribute("href", site.link, 0)}${add_attribute("class", siteLinkClass, 0)}><img${add_attribute("src", site.img, 0)}${add_attribute("class", siteImgClass, 0)}${add_attribute("alt", site.imgAlt, 0)}> <span>${escape(site.name)}</span></a>  ${validate_component(Card, "Card").$$render(
    $$result,
    {
      class: "w-full",
      size: "md",
      border: false
    },
    {},
    {
      default: () => {
        return `<h1${add_attribute("class", cardH1Class, 0)}>${escape(title2)}</h1> <form class="mt-8 space-y-6">${slots.default ? slots.default({}) : ``} ${rememberMe2 || lostPassword2 ? `<div class="flex items-start">${rememberMe2 ? `${validate_component(Checkbox, "Checkbox").$$render(
          $$result,
          {
            class: "accent-primary-600",
            name: "remember"
          },
          {},
          {
            default: () => {
              return `Remember me`;
            }
          }
        )}` : ``} ${lostPassword2 ? `${validate_component(A, "A").$$render(
          $$result,
          {
            href: lostPasswordLink2,
            aClass: "ml-auto text-sm"
          },
          {},
          {
            default: () => {
              return `Lost Password?`;
            }
          }
        )}` : ``}</div>` : ``} ${validate_component(Button, "Button").$$render($$result, { type: "submit", size: "lg" }, {}, {
          default: () => {
            return `${escape(loginTitle2)}`;
          }
        })} ${createAccount2 ? `<div class="text-sm font-medium text-gray-500 dark:text-gray-400">Not registered? ${validate_component(A, "A").$$render($$result, { href: registerLink2 }, {}, {
          default: () => {
            return `${escape(createAccountTitle2)}`;
          }
        })}</div>` : ``}</form>`;
      }
    }
  )}</div></main> `;
});
let title = "Sign in to platform";
let rememberMe = true;
let lostPassword = true;
let createAccount = true;
let lostPasswordLink = "forgot-password";
let loginTitle = "Login to your account";
let registerLink = "sign-up";
let createAccountTitle = "Create account";
const path = "/authentication/sign-in";
const description = "Sign in example - Flowbite Svelte Admin Dashboard";
const metaTitle = "Flowbite Svelte Admin Dashboard - Sign in";
const subtitle = "Sign in";
const Sign_in = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let site = {
    name: "",
    img: "/images/flowbite-svelte-icon-logo.svg",
    link: "/",
    imgAlt: "FlowBite Logo"
  };
  return `${validate_component(MetaTag, "MetaTag").$$render(
    $$result,
    {
      path,
      description,
      title: metaTitle,
      subtitle
    },
    {},
    {}
  )} ${validate_component(SignIn, "SignIn").$$render(
    $$result,
    {
      title,
      site,
      rememberMe,
      lostPassword,
      createAccount,
      lostPasswordLink,
      loginTitle,
      registerLink,
      createAccountTitle
    },
    {},
    {
      default: () => {
        return `<div>${validate_component(Label, "Label").$$render(
          $$result,
          {
            for: "email",
            class: "mb-2 dark:text-white"
          },
          {},
          {
            default: () => {
              return `Your email`;
            }
          }
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "email",
            name: "email",
            id: "email",
            placeholder: "name@company.com",
            required: true,
            class: "border outline-none dark:border-gray-600 dark:bg-gray-700"
          },
          {},
          {}
        )}</div> <div>${validate_component(Label, "Label").$$render(
          $$result,
          {
            for: "password",
            class: "mb-2 dark:text-white"
          },
          {},
          {
            default: () => {
              return `Your password`;
            }
          }
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "password",
            name: "password",
            id: "password",
            placeholder: "••••••••",
            required: true,
            class: "border outline-none dark:border-gray-600 dark:bg-gray-700"
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}`;
});
export {
  Sign_in as default
};
