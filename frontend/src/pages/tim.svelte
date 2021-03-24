<div class="max-w-screen-lg mx-auto text-center mt-4 px-4">
  <h1 class="font-bold nunito text-4xl text-gray-900 mb-4">
    Tim Redaksi Motiv
  </h1>
  {#each data as item, index}
    <SquadCard {...item} isInverted={index % 2 !== 0} />
  {/each}
</div>

<script>
import { metatags } from "@roxi/routify"
import SquadCard from "../components/SquadCard.svelte"

const data = [
  {
    name: "Ahmad Miftah Wildan",
    role: "Editor",
    desc:
      "Ahmad Miftah Wildan Zakaria, sering dipanggil Willy. Lahir 31 Agustus 2003 di Jember. Lulusan dari MI Darul Ibad dan SMPN 9 Jember. Saat ini bersekolah di SMKN 3 Jember, jurusan Multimedia kelas",
  },
  {
    name: "Putra Bagas Firmansyah",
    role: "Graphic Designer",
    desc:
      "Putra Bagas Firmansyah, sering dipanggil Bagas. Lahir pada tanggal 17 Februari 2003 di Jember. Lulusan dari SDN Kepatihan 03 dan SMPN 10 Jember. Saat ini bersekolah di SMKN 3 Jember mengambil jurusan Multimedia.",
  },
  {
    name: "Haris Ali Abduh",
    role: "Backend Developer",
    desc:
      "Haris Ali Abduh, sering juga dipanggil Haris. Lahir di Jember pada tanggal 15 September 2003. Haris adalah seorang lulusan dari SDN Petung 2 Jember dan MTS Hidayatul Mubtadi'in. Saat ini mengambil jurusan Rekayasa Perangkat Lunak di SMKN 3 Jember.",
  },
  {
    name: "Ahmad Muhib Firdausy",
    role: "Content Writer",
    desc:
      "Ahmad Muhib Firdausy, sering dipanggil Muhib. Lahir di Jember pada tanggal 25 April 2004. Lulusan dari SDN Baratan 1 Jember dan SMPN 10 Jember, seorang siswa SMKN 3 Jember yang mengambil jurusan Rekayasa Perangkat Lunak",
  },
  {
    name: "Dicha Zelianivan Arkana",
    role: "Frontend Developer",
    desc:
      "Dicha Zelianivan Arkana, sering dipanggil Dicha. Lahir di Jember pada tanggal 3 Desember 2003. Lulusan dari SDN Jember Kidul 2, SDN Jember Lor 2, dan SMPN 1 Jember. Saat ini bersekolah di SMKN 3 Jember mengambil jurusan Rekayasa Perangkat Lunak.",
  },
]

metatags.title = "Tim Redaksi | Motiv"
metatags.description = "Majalah Digital Maspion.IT"
</script>
