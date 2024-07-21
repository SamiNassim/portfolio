"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "../icons";

export interface ProjectProps {
  id: string;
  name: string;
  link: string;
  github?: string;
  card: string;
  cover: string;
  about: string;
  technical?: string;
  obstacles?: string;
}

const Project = ({
  id,
  name,
  link,
  github,
  card,
  cover,
  about,
  technical,
  obstacles,
}: ProjectProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="flex flex-row gap-4" onClick={onOpen}>
        <Card className="h-[300px] w-[200px]">
          <CardHeader className="absolute top-1 z-10 flex-col !items-center justify-center">
            {name}
          </CardHeader>
          <Image
            className="z-0 h-full w-full object-cover"
            src={card}
            width={200}
            height={300}
            alt="Image du projet"
          />
        </Card>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="full"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
              <ModalBody className="gap-10 p-4">
                <div className="flex flex-col items-center gap-8 lg:flex-row">
                  <Link href={link} target="_blank">
                    <Card className="h-[250px]">
                      <Image
                        src={cover}
                        alt="Image de présentation"
                        width={800}
                        height={400}
                      />
                    </Card>
                  </Link>
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-4">
                      <Link href={link} target="_blank">
                        <GlobeIcon strokeWidth={1.1} />
                      </Link>
                      {github && (
                        <Link href={github} target="_blank">
                          <GithubIcon />
                        </Link>
                      )}
                    </div>
                    <h1 className="py-2 text-lg font-bold">
                      À propos du projet
                    </h1>
                    <div dangerouslySetInnerHTML={{ __html: about }}></div>
                  </div>
                </div>
                <div>
                  <h1 className="py-2 text-lg font-bold">Côté technique</h1>
                  <div
                    className="flex flex-col items-center justify-between gap-4 lg:flex-row"
                    dangerouslySetInnerHTML={{ __html: technical! }}
                  ></div>
                </div>

                <div>
                  <h1 className="py-2 text-lg font-bold">
                    Obstacles rencontrés
                  </h1>
                  <div dangerouslySetInnerHTML={{ __html: obstacles! }}></div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fermer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Project;
