"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { iconSlugs, siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { motion } from "framer-motion";
import { Avatar } from "@nextui-org/avatar";
import TextRevealByWord from "@/components/magicui/text-reveal";
import IconCloud from "@/components/magicui/icon-cloud";
import Project, { ProjectProps } from "@/components/ui/project";
import BlurFade from "@/components/magicui/blur-fade";
import photo from "@/public/photo.jpg";
import { projects } from "@/config/projects";

export default function Home() {
  return (
    <>
      <section
        id="about"
        className="flex flex-col-reverse items-center justify-center gap-12 py-8 md:flex-row md:py-10"
      >
        <BlurFade delay={0.25 * 0.05} inView>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block max-w-lg justify-center text-center"
          >
            <h1 className={title()}>Salut ! 👋</h1>
            <br />
            <h1 className={title()}>Moi c'est Sami</h1>
            <h2 className={subtitle({ class: "mt-4" })}>
              Je suis un développeur fullstack animé par l'envie de créer et
              d'apprendre !
            </h2>
          </motion.div>
        </BlurFade>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Avatar src={photo.src} className="h-40 w-40 text-large" />
        </motion.div>
      </section>
      <BlurFade delay={0.75} inView>
        <section className="flex flex-col py-4">
          <h3 className="text-xl font-bold">À propos de moi</h3>
          <p>
            J'ai toujours été passionné par la programmation et en particulier
            le développement web.
          </p>
          <p>
            J'ai donc décidé de sauter le pas et de me lancer à 100% dans cette
            aventure !
          </p>
          <p>
            Après avoir effectué un bootcamp et obtenu mon diplôme, je continue
            d'apprendre de nouvelles choses tout en travaillant sur mes projets
            personnels.
          </p>
          <p>
            J'ai acquis une expertise approfondie tant sur les technologies
            front-end que back-end, me permettant de gérer l'intégralité du
            cycle de vie d'un projet web.
          </p>
        </section>
      </BlurFade>
      <section id="technos">
        <BlurFade delay={1} inView>
          <IconCloud iconSlugs={iconSlugs} />
        </BlurFade>
      </section>
      <section>
        <TextRevealByWord text="Impliqué sur chaque projet comme si c'était le mien." />
      </section>
      <section id="projects" className="flex flex-col py-4">
        <h4 className="pb-4 text-xl font-bold">Mes projets</h4>
        <div className="flex flex-col gap-4 sm:flex-row">
          {projects.map((project: ProjectProps, index: number) => (
            <BlurFade key={index} delay={0.25 + index * 0.05} inView>
              <Project
                id={project.id}
                name={project.name}
                link={project.link}
                github={project.github}
                card={project.card}
                cover={project.cover}
                about={project.about}
                technical={project.technical}
                obstacles={project.obstacles}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="contact">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <BlurFade delay={0.04 * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Faisons connaissance
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Si vous voulez me contacter, n'hésitez pas à{" "}
                <Link
                  href="mailto:contact@saminassim.dev"
                  className="text-blue-500 hover:underline"
                >
                  m'envoyer un email.
                </Link>
                <br />
                Ou vous pouvez aussi m'ajouter sur{" "}
                <Link
                  href="https://www.linkedin.com/in/sami-bououdine/"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </Link>{" "}
                et je vous répondrai dès que possible !
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
