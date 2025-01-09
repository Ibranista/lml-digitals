import { Metadata } from "next";
import ContentFive from "@/components/ContentFive";
import ContentSix from "@/components/ContentSix";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { devTeams, metaData, words } from "./content";

export const metadata: Metadata = { ...metaData };

export default function Team() {
    return (
        <>
            <div className="mt-20 px-6 md:px-16 lg:px-20">
                <div className="flex flex-col items-center justify-center gap-y-5">
                    <TypewriterEffect words={words} />
                    <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
                        Meet the brilliant minds behind our success, transforming ideas into reality every single day.
                    </p>
                </div>
                {devTeams.map((team) => (
                    <section key={team.category} className="mb-16 mt-8">
                        <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">
                            {team.category}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {team.members.map((member) => (
                                <CardContainer
                                    key={member.id}
                                    containerClassName="py-4"
                                    className="hover:scale-105 transition-transform"
                                >
                                    <CardBody className="bg-gray-50 dark:bg-black border border-black/10 dark:border-white/20 w-64 h-80 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl hover:shadow-red-200/50 dark:hover:shadow-red-500/50 transition-shadow">
                                        <CardItem
                                            translateZ={60}
                                            className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-lg"
                                        >
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </CardItem>
                                        <CardItem
                                            translateZ={80}
                                            className="mt-4 text-lg font-bold text-neutral-700 dark:text-white"
                                        >
                                            {member.name}
                                        </CardItem>
                                        <CardItem
                                            translateZ={90}
                                            className="text-sm text-neutral-500 dark:text-neutral-300"
                                        >
                                            {member.position}
                                        </CardItem>
                                    </CardBody>
                                </CardContainer>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
            <ContentFive />
            <ContentSix />
        </>
    );
}