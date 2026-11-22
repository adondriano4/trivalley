import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, TEAM_MEMBERS } from "@/data/site-data";
import ServiceDetailView from "@/components/ServiceDetailView";
import TeamProfileView from "@/components/TeamProfileView";

export function generateStaticParams() {
  return [
    ...TEAM_MEMBERS.map((m) => ({ slug: m.slug })),
    ...SERVICES.map((s) => ({ slug: s.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const member = TEAM_MEMBERS.find((m) => m.slug === slug);
  if (member) {
    return {
      title: `${member.name} | ${member.shortRole}`,
      description: member.experienceSummary,
    };
  }

  const service = SERVICES.find((s) => s.slug === slug);
  if (service) {
    return {
      title: service.title,
      description: service.summary,
    };
  }

  return {};
}

export default async function RootSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const member = TEAM_MEMBERS.find((m) => m.slug === slug);
  if (member) {
    return <TeamProfileView member={member} />;
  }

  const service = SERVICES.find((s) => s.slug === slug);
  if (service) {
    return <ServiceDetailView service={service} />;
  }

  notFound();
}
