// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kCvp2jQnHcq5LJ8txx1Rx8
// Component: jwLRJNHElz9W

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { Reveal } from "@plasmicpkgs/react-awesome-reveal";

import { useScreenVariants as useScreenVariantswcgr3SdHclm } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _WCGR3sdHclm/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: kCvp2jQnHcq5LJ8txx1Rx8/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: jwLRJNHElz9W/css

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  h3?: Flex__<"h3">;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantswcgr3SdHclm()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__dRitx)}
          >
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__u1N65
              )}
              component={Link}
              href={"https://www.plasmic.app/"}
              platform={"nextjs"}
            >
              {"Home"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__tijwA
              )}
              component={Link}
              href={"#lore"}
              platform={"nextjs"}
            >
              {"Lore"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___0Jk6A
              )}
              component={Link}
              href={"#tokenomics"}
              platform={"nextjs"}
            >
              {"Tokenomics"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___3Azey
              )}
              component={Link}
              href={"#roadmap"}
              platform={"nextjs"}
            >
              {"Roadmap"}
            </PlasmicLink__>
          </Stack__>
          <section className={classNames(projectcss.all, sty.section__d7N70)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__hRr9X)}
              displayHeight={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "auto"
                  : "auto"
              }
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: "/plasmic/squirt/images/websiteBannerpng.png",
                fullWidth: 2250,
                fullHeight: 940,
                aspectRatio: undefined
              }}
            />

            <div className={classNames(projectcss.all, sty.freeBox__xNJcW)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__xe6Vl)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"800px"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/squirt/images/websiteTitlepng.png",
                  fullWidth: 1320,
                  fullHeight: 380,
                  aspectRatio: undefined
                }}
              />

              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__r5U5P
                )}
              >
                {"Guardian of the BASE Blockchain"}
              </h2>
            </div>
          </section>
          <section
            className={classNames(projectcss.all, sty.section___7Fs1A)}
            id={"lore"}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___98Sx)}
            >
              <Reveal
                cascade={true}
                className={classNames("__wab_instance", sty.reveal__y0CgX)}
                direction={"up"}
                triggerOnce={true}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___2NbW)}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__clc1T)}
                    displayHeight={"300px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"300px"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/squirt/images/squirtieHatchgif.gif",
                      fullWidth: 880,
                      fullHeight: 880,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__i3YQe
                    )}
                  >
                    {
                      "Legend has it that Squirtie was born under a brilliant star, destined for greatness from the moment he emerged from his eggshell. Raised among the gentle waves of the Cerulean Sea, Squirtie was quickly recognized for his indomitable spirit and adventurous nature."
                    }
                  </div>
                </Stack__>
              </Reveal>
              <Reveal
                cascade={true}
                className={classNames("__wab_instance", sty.reveal__j33Xp)}
                direction={"up"}
                triggerOnce={true}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__uz1A)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zagMi
                    )}
                  >
                    {
                      "As Squirtie grew older, he joined the notorious Squirtle Squad, a group of brave noblemons dedicated to protecting the shores of their homeland. Together, they faced countless challenges and adversaries, forging bonds of friendship that would withstand the test of time."
                    }
                  </div>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__hbFjA)}
                    displayHeight={"300px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"300px"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/squirt/images/squirtieSquadgif.gif",
                      fullWidth: 880,
                      fullHeight: 880,
                      aspectRatio: undefined
                    }}
                  />
                </Stack__>
              </Reveal>
              <Reveal
                cascade={true}
                className={classNames("__wab_instance", sty.reveal__eUmrw)}
                direction={"up"}
                triggerOnce={true}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__voe6H)}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__sNgLy)}
                    displayHeight={"300px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"300px"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/squirt/images/squirtieFarewellgif.gif",
                      fullWidth: 880,
                      fullHeight: 880,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___21EyG
                    )}
                  >
                    {
                      "But as the tides of destiny shifted, Squirtie felt a new calling stirring within his heart. Hearing the cries of memelovers across the Blockchain, who were falling victim to rug pulls and scams, Squirtie knew that his journey was far from over. With a heavy heart and a determined spirit, Squirtie bid farewell to his beloved Squad and set out on a new quest."
                    }
                  </div>
                </Stack__>
              </Reveal>
              <Reveal
                cascade={true}
                className={classNames("__wab_instance", sty.reveal__mTxpT)}
                direction={"up"}
                triggerOnce={true}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__v04Yy)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___48LuC
                    )}
                  >
                    {
                      "But as the tides of destiny shifted, Squirtie felt a new calling stirring within his heart. Hearing the cries of memelovers across the Blockchain, who were falling victim to rug pulls and scams, Squirtie knew that his journey was far from over. With a heavy heart and a determined spirit, Squirtie bid farewell to his beloved Squad and set out on a new quest."
                    }
                  </div>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__zCfy5)}
                    displayHeight={"300px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"300px"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/squirt/images/squirtieSurfgif.gif",
                      fullWidth: 880,
                      fullHeight: 880,
                      aspectRatio: undefined
                    }}
                  />
                </Stack__>
              </Reveal>
            </Stack__>
          </section>
          <section
            className={classNames(projectcss.all, sty.section___0Nf4X)}
            id={"tokenomics"}
          >
            <div className={classNames(projectcss.all, sty.freeBox__mGIlO)}>
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__otgty
                )}
              >
                {"TOKENOMICS"}
              </h2>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__m53M)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/squirt/images/websiteSeparatorpng.png",
                  fullWidth: 1024,
                  fullHeight: 88,
                  aspectRatio: undefined
                }}
              />
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__mrR6Q)}
            >
              <div className={classNames(projectcss.all, sty.column__qAb7Z)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__rcoW9)}
                  displayHeight={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "300px"
                      : "300px"
                  }
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "300px"
                      : "300px"
                  }
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/squirt/images/squirtieCoinTransparentpng.png",
                    fullWidth: 336,
                    fullHeight: 336,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__shN8Y)}>
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__u4MsN
                  )}
                >
                  {"1,000,000,000 "}
                </h2>
                <h3
                  data-plasmic-name={"h3"}
                  data-plasmic-override={overrides.h3}
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3
                  )}
                >
                  {
                    "0% Tax. \n45% LP\n45% Airdrop \n10% Marketing/KOL/CEX \n\nCONTRACT ADDRESS :\n0x8123u9ie8uwqe09qw\ne908q098ewq09we\n"
                  }
                </h3>
              </div>
            </Stack__>
          </section>
          <section
            className={classNames(projectcss.all, sty.section___8LqUt)}
            id={"roadmap"}
          >
            <div className={classNames(projectcss.all, sty.freeBox__mpW)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__yszi4)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/squirt/images/websiteSeparatorpng.png",
                  fullWidth: 1024,
                  fullHeight: 88,
                  aspectRatio: undefined
                }}
              />

              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__vhtUx
                )}
              >
                {"Roadmap"}
              </h2>
            </div>
            <div className={classNames(projectcss.all, sty.columns__xkc5V)}>
              <div className={classNames(projectcss.all, sty.column__eeecV)} />
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__eqDjH)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__xPYdC)}
            >
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__sc15F
                )}
                component={Link}
                platform={"nextjs"}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__vq9)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/squirt/images/websiteTelegrampng.png",
                    fullWidth: 72,
                    fullHeight: 52,
                    aspectRatio: undefined
                  }}
                />
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__gtVEt
                )}
                component={Link}
                platform={"nextjs"}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__je5P3)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/squirt/images/websiteTwitterpng.png",
                    fullWidth: 72,
                    fullHeight: 52,
                    aspectRatio: undefined
                  }}
                />
              </PlasmicLink__>
            </Stack__>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h3"],
  h3: ["h3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h3: "h3";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
