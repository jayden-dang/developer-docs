import { i18nConfig } from "@docs-config";
import { Link, LocaleSwitch } from "nextra-theme-docs";
import { useRouter } from "nextra/hooks";
import {
  IconGithub,
  IconLinkedIn,
  IconTelegram,
  IconTwitter,
} from "../components/Icons";

export function FooterSection() {
  const { locale } = useRouter();
  const t = i18nConfig[locale!];

  return (
    <footer className="flex flex-col max-sm:px-8">
      <div className="flex justify-center border-b md:border-y border-border-divider ">
        <div className="flex flex-col md:flex-row justify-between sm:max-md:px-5 md:pl-8 w-full max-w-[1512px]">
          <div className="flex flex-wrap items-center max-md:justify-between gap-3 max-md:p-3">
            <Link
              href="https://jaydendang.com"
              title={t.aptosAlt}
              className="text-text-primary md:py-[calc(theme(spacing.5)-theme(borderWidth.100))]"
            >
              <img src="/docs/white-logo.png" alt="logo" className="h-12"/>
            </Link>
            <div className="flex gap-2 sm:gap-3 sm:[&_svg]:h-4 sm:[&_svg]:w-4 [&>*]:text-[var(--text-muted)!important]">
              <LocaleSwitch className="body-100 sm:body-200 sm:[&>*]:gap-3" />
              {/* <ThemeSwitch className="body-100 sm:body-200 sm:[&>*]:gap-3" /> */}
            </div>
          </div>
          <div
            className="
            flex items-center md:gap-2 md:px-6 md:py-[calc(theme(spacing.3)-theme(borderWidth.100))]
            md:border-l md:border-border-divider [&>a]:text-text-primary [&>a]:p-3
            "
          >
            {/* <Link href="https://discord.gg/" title={t.discordAlt}>
                <IconDiscord />
                </Link> */}
            <Link
              href="https://github.com/jayden-dang"
              title={t.githubAlt}
            >
              <IconGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jayden-dangvu/"
              title={t.linkedinAlt}
            >
              <IconLinkedIn />
            </Link>
            <Link href="https://t.me/jayden_dangvu" title={t.telegramAlt}>
              <IconTelegram />
            </Link>
            <Link href="https://twitter.com/jayden_dangvu" title={t.twitterAlt}>
              <IconTwitter />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center [&>div]:w-full [&>div]:max-w-[1512px] lg:[&>div]:px-24 xl:[&>div]:px-[168px]">
        {/* <div className="flex max-sm:flex-col flex-wrap px-5 py-6 sm:px-8 sm:py-10 gap-6 sm:gap-10">
            <div className="flex flex-1 gap-6 sm:gap-10 max-w-[440px]">
            <LinksColumn
            heading={t.buildHeading}
            links={[
            {
            label: t.documentationLink,
            href: `/${locale}/build/get-started`,
            }
            ]}
            />
            <LinksColumn
            heading={t.discoverHeading}
            links={[
            {
            label: t.ecosystemHubLink,
            href: "https://aptosfoundation.org/ecosystem/projects/all",
            },
            ]}
            />
            </div>
            <div className="w-[calc(100%+theme(spacing.10))] -mx-5 bg-border-divider sm:hidden" />
            <div className="flex flex-1 gap-6 sm:gap-10 max-w-[440px]">
            <LinksColumn
            heading={t.connectHeading}
            links={[
            {
            label: t.eventsLink,
            href: "https://aptosfoundation.org/events",
            },
            {
            label: t.collectiveLink,
            href: "https://aptosfoundation.org/currents/join-the-aptos-collective",
            },
            {
            label: t.forumLink,
            href: "https://forum.aptosfoundation.org/",
            },
            ]}
            />
            <LinksColumn
            heading={t.meetAptosHeading}
            links={[
            {
            label: t.aboutAptosLink,
            href: "https://aptosfoundation.org/",
            },
            {
            label: t.brandLink,
            href: "https://aptosfoundation.org/brand",
            },
            {
            label: t.careersLink,
            href: "https://aptosfoundation.org/ecosystem/jobs",
            },
            ]}
            />
            </div>
            </div> */}

        <div
          className="
          flex flex-col sm:flex-row px-5 sm:px-8 py-6 gap-4 sm:gap-6 sm:items-center
          max-sm:border-t border-border-divider body-100 sm:body-200 font-medium
          "
        >
          <div className="text-text-muted">
            © {new Date().getFullYear()} Jayden Dang
          </div>
          <h3 className="text-xs text-gray-500">
            The content and materials on the websites represent personal opinions and viewpoints and should only be used as reference material.
          </h3>
        </div>
      </div>
    </footer>
  );
}

interface LinksColumnProps {
  heading: string;
  links: Array<{ label: string; href: string }>;
}

function LinksColumn({ heading, links }: LinksColumnProps) {
  return (
    <div className="flex flex-col gap-4 flex-1 whitespace-nowrap">
      <h3 className="title-100 sm:title-200 text-text-muted">{heading}</h3>
      {links.map(({ href, label }) => (
        <Link
          key={label}
          href={href}
          className="body-100 sm:body-300 font-medium text-text-primary no-underline"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
