import { c as create_ssr_component, a as compute_rest_props, g as getContext, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, h as escape, v as validate_component, k as each, m as missing_component } from "../../../../chunks/ssr.js";
import { i as imagesPath } from "../../../../chunks/variables.js";
import { A as Avatar } from "../../../../chunks/Avatar.js";
import { B as Button } from "../../../../chunks/Button.js";
import { C as Card } from "../../../../chunks/Card.js";
import { H as Heading } from "../../../../chunks/Heading.js";
import { U as Users } from "../../../../chunks/users.js";
import { T as Toggle } from "../../../../chunks/Toggle.js";
import { L as Label } from "../../../../chunks/Checkbox.js";
import { I as Input } from "../../../../chunks/Input.js";
import { S as Select } from "../../../../chunks/Select.js";
import { twMerge } from "tailwind-merge";
import { D as DesktopPcOutline, M as MobilePhoneOutline } from "../../../../chunks/MobilePhoneOutline.js";
import { A } from "../../../../chunks/A.js";
import { a as FacebookSolid, T as TwitterSolid, D as DribbbleSolid, F as Footer } from "../../../../chunks/Footer.js";
import { G as GithubSolid } from "../../../../chunks/GithubSolid.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../chunks/BreadcrumbItem.js";
import { M as MetaTag } from "../../../../chunks/MetaTag.js";
const UploadSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { title: title2 = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title2.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "upload solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12 3a1 1 0 0 1 .78.375l4 5a1 1 0 1 1-1.56 1.25L13 6.85V14a1 1 0 1 1-2 0V6.85L8.78 9.626a1 1 0 1 1-1.56-1.25l4-5A1 1 0 0 1 12 3ZM9 14v-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
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
  )}>${title2.id && title2.title ? `<title${add_attribute("id", title2.id, 0)}>${escape(title2.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M12 3a1 1 0 0 1 .78.375l4 5a1 1 0 1 1-1.56 1.25L13 6.85V14a1 1 0 1 1-2 0V6.85L8.78 9.626a1 1 0 1 1-1.56-1.25l4-5A1 1 0 0 1 12 3ZM9 14v-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"></path></svg>`} `;
});
const Accounts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, { size: "xl" }, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          tag: "h3",
          class: "text-xl font-semibold tracking-wide"
        },
        {},
        {
          default: () => {
            return `Other accounts`;
          }
        }
      )} <ul class="divide-y divide-gray-200 dark:divide-gray-700">${each(Users.slice(0, 4), ({ avatar, name, country, status }) => {
        return `<li class="flex items-center justify-between space-x-4 py-4"><div class="flex items-start space-x-4">${validate_component(Avatar, "Avatar").$$render(
          $$result,
          {
            src: imagesPath(avatar, "users"),
            size: "xs",
            class: "mt-1"
          },
          {},
          {}
        )} <div class="min-w-0 flex-1"><p class="truncate text-base font-semibold text-gray-900 dark:text-white">${escape(name)}</p> <p class="truncate text-sm font-normal text-primary-700 dark:text-primary-500">${escape(country)}</p> <p class="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">Last seen: ${escape(Math.ceil(Math.random() * 10))} min ago</p> </div></div> ${status === "Active" ? `${validate_component(Button, "Button").$$render($$result, { class: "px-3 py-2", color: "alternative" }, {}, {
          default: () => {
            return `Disconnect`;
          }
        })}` : `${validate_component(Button, "Button").$$render($$result, { class: "px-3 py-2" }, {}, {
          default: () => {
            return `Connect`;
          }
        })}`} </li>`;
      })}</ul> ${validate_component(Button, "Button").$$render($$result, { class: "mt-2 w-fit" }, {}, {
        default: () => {
          return `Save all`;
        }
      })}`;
    }
  })}`;
});
const Card_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title: title2 } = $$props;
  let { subtitle: subtitle2 = "" } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle2 !== void 0) $$bindings.subtitle(subtitle2);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `${validate_component(Card, "Card").$$render($$result, { size: "xl", class: "shadow-sm " + clazz }, {}, {
    default: () => {
      return `<div class="mb-4 mt-px lg:mb-0">${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          tag: "h3",
          class: "-ml-0.25 mb-2 text-xl font-semibold dark:text-white"
        },
        {},
        {
          default: () => {
            return `${escape(title2)}`;
          }
        }
      )} ${subtitle2 ? `<span class="text-base font-normal text-gray-500 dark:text-gray-400">${escape(subtitle2)}</span>` : ``}</div> ${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const CardList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "subtitle", "buttonLabel", "items"]);
  let { title: title2 } = $$props;
  let { subtitle: subtitle2 = "" } = $$props;
  let { buttonLabel = "Save all" } = $$props;
  let { items = [] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle2 !== void 0) $$bindings.subtitle(subtitle2);
  if ($$props.buttonLabel === void 0 && $$bindings.buttonLabel && buttonLabel !== void 0) $$bindings.buttonLabel(buttonLabel);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  return `${validate_component(Card_1, "Card").$$render($$result, Object.assign({}, { title: title2 }, $$restProps), {}, {
    default: () => {
      return `${subtitle2 ? `<p class="text-sm font-normal text-gray-500 dark:text-gray-400">${escape(subtitle2)}</p>` : ``} <ul class="divide-y divide-gray-200 dark:divide-gray-700">${each(items, (item) => {
        return `<li class="py-4">${slots.default ? slots.default({ item }) : ``} </li>`;
      })}</ul> ${validate_component(Button, "Button").$$render($$result, { class: "mt-2 w-fit" }, {}, {
        default: () => {
          return `${escape(buttonLabel)}`;
        }
      })}`;
    }
  })} `;
});
const Alerts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = [
    {
      title: "Company News",
      subtitle: "Get Themesberg news, announcements, and product updates",
      active: false
    },
    {
      title: "Account Activity",
      subtitle: "Get important notifications about you or activity you've missed",
      active: true
    },
    {
      title: "Meetups Near You",
      subtitle: "Get an email when a Dribbble Meetup is posted close to my location",
      active: true
    },
    {
      title: "New Messages",
      subtitle: "Get Themsberg news, announcements, and product updates",
      active: false
    }
  ];
  return `${validate_component(CardList, "CardList").$$render(
    $$result,
    {
      title: "Alerts & Notifications",
      subtitle: "You can set up Themesberg to get notifications",
      items
    },
    {},
    {
      default: ({ item }) => {
        return `<div class="flex items-center justify-between"><div class="flex flex-grow flex-col"><div class="text-lg font-semibold text-gray-900 dark:text-white">${escape(item.title)}</div> <div class="text-base font-normal text-gray-500 dark:text-gray-400">${escape(item.subtitle)}</div></div> ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            checked: item.active,
            class: "peer-focus:ring-0 me-0"
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}`;
});
const Emails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = [
    {
      title: "Rating reminders",
      subtitle: "Send an email reminding me to rate an item a week after purchase",
      active: true
    },
    {
      title: "Item update notifications",
      subtitle: "Send user and product notifications for you",
      active: false
    },
    {
      title: "Item comment notifications",
      subtitle: "Send me an email when someone comments on one of my items",
      active: true
    },
    {
      title: "Buyer review notifications",
      subtitle: "Send me an email when someone leaves a review with their rating",
      active: false
    }
  ];
  return `${validate_component(CardList, "CardList").$$render(
    $$result,
    {
      title: "Email Notifications",
      subtitle: "You can set up Themesberg to get email notifications ",
      items
    },
    {},
    {
      default: ({ item }) => {
        return `<div class="flex items-center justify-between"><div class="flex flex-grow flex-col"><div class="text-lg font-semibold text-gray-900 dark:text-white">${escape(item.title)}</div> <div class="text-base font-normal text-gray-500 dark:text-gray-400">${escape(item.subtitle)}</div></div> ${validate_component(Toggle, "Toggle").$$render(
          $$result,
          {
            checked: item.active,
            class: "peer-focus:ring-0 me-0"
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}`;
});
const GeneralInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const inputs = [
    {
      label: "First Name",
      type: "text",
      placeholder: "Bonnie"
    },
    {
      label: "Last Name",
      type: "text",
      placeholder: "Green"
    },
    {
      label: "Country",
      type: "text",
      placeholder: "United States"
    },
    {
      label: "City",
      type: "text",
      placeholder: "e.g. San Francisco"
    },
    {
      label: "Address",
      type: "text",
      placeholder: "e.g. California"
    },
    {
      label: "Email",
      type: "text",
      placeholder: "example@company.com"
    },
    {
      label: "Phone Number",
      type: "text",
      placeholder: "e.g. +(12)3456 789"
    },
    {
      label: "Birthday",
      type: "text",
      placeholder: "15/08/1980"
    },
    {
      label: "Organization",
      type: "text",
      placeholder: "Company Name"
    },
    {
      label: "Role",
      type: "text",
      placeholder: "Svelte Developer"
    },
    {
      label: "Department",
      type: "text",
      placeholder: "Development"
    },
    {
      label: "Zip/postal code",
      type: "text",
      placeholder: "123456"
    }
  ];
  return `${validate_component(Card_1, "Card").$$render(
    $$result,
    {
      title: "General Information",
      class: "-mt-px max-w-none"
    },
    {},
    {
      default: () => {
        return `<form class="grid grid-cols-6 gap-6">${each(inputs, ({ label, type, placeholder }) => {
          return `${validate_component(Label, "Label").$$render(
            $$result,
            {
              class: "col-span-6 space-y-2 sm:col-span-3"
            },
            {},
            {
              default: () => {
                return `<span>${escape(label)}</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    type,
                    placeholder,
                    class: "border font-normal outline-none"
                  },
                  {},
                  {}
                )} `;
              }
            }
          )}`;
        })} ${validate_component(Button, "Button").$$render($$result, { class: "w-fit whitespace-nowrap" }, {}, {
          default: () => {
            return `Save all`;
          }
        })}</form>`;
      }
    }
  )}`;
});
const LanguageTime = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const languages = [
    { name: "English (US)", value: "en" },
    { name: "Italiano", value: "it" },
    { name: "Français (France)", value: "fr" },
    { name: "正體字", value: "ch" },
    { name: "Español (España)", value: "es" },
    { name: "Deutsch", value: "de" },
    { name: "Português (Brasil)", value: "pt" }
  ];
  const timezones = [
    {
      name: "GMT+0 Greenwich Mean Time (GMT)",
      value: "0"
    },
    {
      name: "GMT+1 Central European Time (CET)",
      value: "1"
    },
    {
      name: "GMT+2 Eastern European Time (EET)",
      value: "2"
    },
    {
      name: "GMT+3 Moscow Time (MSK)",
      value: "3"
    },
    {
      name: "GMT+5 Pakistan Standard Time (PKT)",
      value: "4"
    },
    {
      name: "GMT+8 China Standard Time (CST)",
      value: "5"
    },
    {
      name: "GMT+10 Eastern Australia Standard Time (AEST)",
      value: "6"
    }
  ];
  return `${validate_component(Card_1, "Card").$$render($$result, { title: "Language & Time" }, {}, {
    default: () => {
      return `<div class="space-y-4">${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1gbwyn8">Select language</span> ${validate_component(Select, "Select").$$render($$result, { items: languages, class: "font-normal" }, {}, {})}`;
        }
      })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1cvrbc1">Time Zone</span> ${validate_component(Select, "Select").$$render($$result, { items: timezones, class: "font-normal" }, {}, {})}`;
        }
      })}</div> ${validate_component(Button, "Button").$$render($$result, { class: "mt-6 w-fit" }, {}, {
        default: () => {
          return `Save all`;
        }
      })}`;
    }
  })}`;
});
const PasswordInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card_1, "Card").$$render(
    $$result,
    {
      title: "Password Information",
      class: "max-w-none"
    },
    {},
    {
      default: () => {
        return `&gt;
	<div class="grid grid-cols-6 gap-6">${validate_component(Label, "Label").$$render(
          $$result,
          {
            class: "col-span-6 space-y-2 sm:col-span-3"
          },
          {},
          {
            default: () => {
              return `<span data-svelte-h="svelte-1w6vfks">Current password</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  placeholder: "••••••••",
                  class: "border font-normal outline-none"
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
              return `<span data-svelte-h="svelte-1dz5299">New password</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  placeholder: "••••••••",
                  class: "border font-normal outline-none"
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
              return `<span data-svelte-h="svelte-1ftz1a7">Confirm password</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  placeholder: "••••••••",
                  class: "border font-normal outline-none"
                },
                {},
                {}
              )}`;
            }
          }
        )} ${validate_component(Button, "Button").$$render($$result, { class: "sm:col-full col-span-6 w-fit" }, {}, {
          default: () => {
            return `Save all`;
          }
        })}</div>`;
      }
    }
  )}`;
});
const ProfilePicture = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      size: "xl",
      class: "block shadow-sm sm:flex sm:space-x-4 sm:py-6 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4",
      horizontal: true
    },
    {},
    {
      default: () => {
        return `${validate_component(Avatar, "Avatar").$$render(
          $$result,
          {
            src,
            class: "mb-4 h-28 w-28 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0",
            size: "none",
            rounded: true
          },
          {},
          {}
        )} <div class="py-0.5">${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "text-xl" }, {}, {
          default: () => {
            return `Profile picture`;
          }
        })} <p class="mb-4 mt-1 pt-px text-sm" data-svelte-h="svelte-11zwp1h">JPG, GIF or PNG. Max size of 800K</p> <div class="flex items-center space-x-4">${validate_component(Button, "Button").$$render($$result, { size: "sm", class: "px-3" }, {}, {
          default: () => {
            return `${validate_component(UploadSolid, "UploadSolid").$$render($$result, { size: "sm", class: "-ms-1 me-2" }, {}, {})} Upload picture`;
          }
        })} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            size: "sm",
            class: "px-3",
            color: "alternative"
          },
          {},
          {
            default: () => {
              return `Delete`;
            }
          }
        )}</div></div>`;
      }
    }
  )} `;
});
const Sessions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card_1, "Card").$$render($$result, { title: "Sessions", class: "max-w-none" }, {}, {
    default: () => {
      return `<ul class="divide-y divide-gray-200 dark:divide-gray-700"><li class="py-4"><div class="flex items-center space-x-4">${validate_component(DesktopPcOutline, "DesktopPcOutline").$$render(
        $$result,
        {
          size: "lg",
          class: "text-gray-900 dark:text-white"
        },
        {},
        {}
      )} <div class="min-w-0 flex-1" data-svelte-h="svelte-my1w7j"><p class="truncate text-base font-semibold text-gray-900 dark:text-white">California 123.123.123.123</p> <p class="truncate text-sm font-normal text-gray-500 dark:text-gray-400">Chrome on macOS</p></div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          href: "#top",
          class: "px-3 py-2 dark:text-gray-400 dark:hover:text-white",
          color: "light"
        },
        {},
        {
          default: () => {
            return `Revoke`;
          }
        }
      )}</div></li> <li class="py-4"><div class="flex items-center space-x-4">${validate_component(MobilePhoneOutline, "MobilePhoneOutline").$$render(
        $$result,
        {
          size: "lg",
          class: "text-gray-900 dark:text-white"
        },
        {},
        {}
      )} <div class="min-w-0 flex-1" data-svelte-h="svelte-jarzkl"><p class="truncate text-base font-semibold text-gray-900 dark:text-white">Rome 24.456.355.98</p> <p class="truncate text-sm font-normal text-gray-500 dark:text-gray-400">Safari on iPhone</p></div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          href: "#top",
          class: "px-3 py-2 dark:text-gray-400 dark:hover:text-white",
          color: "light"
        },
        {},
        {
          default: () => {
            return `Revoke`;
          }
        }
      )}</div></li></ul> ${validate_component(Button, "Button").$$render($$result, { class: "w-fit" }, {}, {
        default: () => {
          return `See more`;
        }
      })}`;
    }
  })}`;
});
const SocialAccounts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = [
    {
      icon: FacebookSolid,
      name: "Facebook account",
      link: "www.facebook.com/themesberg"
    },
    {
      icon: TwitterSolid,
      name: "Twitter account",
      link: "www.twitter.com/themesberg"
    },
    {
      icon: GithubSolid,
      name: "Github account",
      link: ""
    },
    {
      icon: DribbbleSolid,
      name: "Dribble account",
      link: ""
    }
  ];
  return `${validate_component(Card_1, "Card").$$render($$result, { title: "Social accounts" }, {}, {
    default: () => {
      return `<ul class="divide-y divide-gray-200 dark:divide-gray-700">${each(items, ({ icon, name, link }) => {
        return `<li class="py-4"><div class="flex items-center space-x-4"><div class="flex-shrink-0">${validate_component(icon || missing_component, "svelte:component").$$render(
          $$result,
          {
            size: "lg",
            class: "text-gray-900 dark:text-white"
          },
          {},
          {}
        )}</div> <div class="min-w-0 flex-1"><p class="truncate text-base font-semibold text-gray-900 dark:text-white">${escape(name)}</p> <p class="truncate text-sm font-normal text-gray-500 dark:text-gray-400">${link ? `${validate_component(A, "A").$$render($$result, { href: "" }, {}, {
          default: () => {
            return `${escape(link)}`;
          }
        })}` : `Not connected`} </p></div> <div class="inline-flex items-center">${link ? `${validate_component(Button, "Button").$$render($$result, { class: "px-3 py-2", color: "alternative" }, {}, {
          default: () => {
            return `Disconnect`;
          }
        })}` : `${validate_component(Button, "Button").$$render($$result, { class: "px-3 py-2" }, {}, {
          default: () => {
            return `Connect`;
          }
        })}`} </div></div> </li>`;
      })}</ul> ${validate_component(Button, "Button").$$render($$result, { class: "mt-2 w-fit" }, {}, {
        default: () => {
          return `Save all`;
        }
      })}`;
    }
  })}`;
});
const path = "/settings";
const description = "Settings examaple - Flowbite Svelte Admin Dashboard";
const title = "Flowbite Svelte Admin Dashboard - Settings";
const subtitle = "Settings";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MetaTag, "MetaTag").$$render($$result, { path, description, title, subtitle }, {}, {})} <main class="p-4"><div class="grid grid-cols-1 space-y-2 dark:bg-gray-900 xl:grid-cols-3 xl:gap-3.5"><div class="col-span-full xl:mb-0">${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { class: "mb-6" }, {}, {
    default: () => {
      return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { home: true }, {}, {
        default: () => {
          return `Home`;
        }
      })} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render(
        $$result,
        {
          class: "inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white",
          href: "/curd/users"
        },
        {},
        {
          default: () => {
            return `Users`;
          }
        }
      )} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
        default: () => {
          return `Settings`;
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
        return `User settings`;
      }
    }
  )}</div> <div class="col-span-full space-y-4 xl:col-auto">${validate_component(ProfilePicture, "ProfilePicture").$$render(
    $$result,
    {
      src: imagesPath(Users[4].avatar, "users")
    },
    {},
    {}
  )} ${validate_component(LanguageTime, "LanguageTime").$$render($$result, {}, {}, {})} ${validate_component(SocialAccounts, "SocialAccounts").$$render($$result, {}, {}, {})} ${validate_component(Accounts, "Accounts").$$render($$result, {}, {}, {})}</div> <div class="col-span-2 space-y-4">${validate_component(GeneralInfo, "GeneralInfo").$$render($$result, {}, {}, {})} ${validate_component(PasswordInfo, "PasswordInfo").$$render($$result, {}, {}, {})} ${validate_component(Sessions, "Sessions").$$render($$result, {}, {}, {})}</div></div> <div class="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-4">${validate_component(Alerts, "Alerts").$$render($$result, {}, {}, {})} ${validate_component(Emails, "Emails").$$render($$result, {}, {}, {})}</div></main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
