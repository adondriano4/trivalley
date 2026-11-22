import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const outDir = process.env.ASSETS_OUT_DIR || path.join(process.cwd(), "public", "images");
fs.mkdirSync(outDir, { recursive: true });

const REMOTE_URLS = {
  "logo-full.png": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/jeff-logo-removebg-preview.png",
  "chap-seal.png": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/asfckjacnbsa-c.png",
  "cms-seal.png": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/ksjabc-ascsac.png",
  "hero-slide-1.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/supporting-mature-patient-8B28B9H-utm_nooverride1.jpg",
  "hero-home-care.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/asian-nurse-showing-health-checkup-report-to-grand-HZ356JB.jpg",
  "hero-slide-3.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/mother-and-daughter-doing-fitness-exercises-at-hom-NZTE9KS.jpg",
  "parallax-why.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/front-view-portrait-of-caring-afro-nurse-taking-ca-GPZGUFG.jpg",
  "parallax-testimonials.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/cheerful-impaired-senior-man-in-wheelchair-taking-C7R4K8S.jpg",
  "parallax-cta.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/senior-people-looking-at-camera-in-retirement-home-7W8TQX4.jpg",
  "vimeo-intro-thumb.jpg": "https://i.vimeocdn.com/video/2182239746-206db8231339a9c2fb309d5b6b1ccc04fb150cc9a08c28ced4e0b342be172d4e-d_1280x720?region=us",
  "service-rehab.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/%D0%A0%D0%B5%D0%B0%D0%B1%D0%B8%D0%BB%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%81-%D0%BD%D0%B0%D1%80%D1%83%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-%D0%9E%D0%94%D0%90-1024x683.jpeg",
  "service-home-health-aide.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/AdobeStock_266659166.jpeg",
  "service-msw.png": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/XXL_height-3.png",
  "service-dietitian.png": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/XXL_height-2.png",
  "service-infusion.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/CIA-Medical-IV-Administration-Sets-Pumps-1024x682.jpg",
  "care-reassuring.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/nurse-reassuring-patient-KL87H9P.jpg",
  "care-family.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/shes-close-to-her-grandparents-M9H63DG.jpg",
  "care-exam.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/nurse-examining-patient-at-home-HYRZQRT.jpg",
  "care-water.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/smiling-nurse-giving-glass-of-water-to-disabled-se-4JDRBJR.jpg",
  "care-coffee.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/smiling-healthcare-worker-serving-coffee-to-senior-3KJ8LMX-800x533-1.jpg",
  "care-teamwork.png": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/two-confident-women-coworkers-in-medical-uniform-XX37GYD-1.png",
  "care-hair.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/nurse-brush-hair-of-happy-mature-woman-in-the-livi-JAQXGJS.jpg",
  "care-breakfast.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/young-nurse-assisting-senior-people-during-breakfa-V26QWH7.jpg",
  "team-necita.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/sadasdas.jpg",
  "team-antonette.png": "https://trivalleyhomehealth.com/wp-content/uploads/2026/10/anto.png",
  "team-kristine.png": "https://trivalleyhomehealth.com/wp-content/uploads/2026/03/kristine123.png",
  "team-beatriz.png": "https://trivalleyhomehealth.com/wp-content/uploads/2026/03/Beatriz-1.png",
  "team-jayvee.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/11/dsffff.jpg",
  "team-edmund-yao.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/12/team.jpg",
  "team-sherwin.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/12/tema.jpg",
};

const WORK_SLIDE_URLS = {
  "work-slide-1.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/12/slid1.png",
  "work-slide-2.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/12/slid2.png",
  "work-slide-3.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/12/sli3.png",
  "work-slide-4.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/12/sld4.png",
  "work-slide-5.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/12/slid5.png",
  "work-slide-6.jpg": "https://trivalleyhomehealth.com/wp-content/uploads/2024/12/slid6.png",
};

const ANNIVERSARY_BADGE_URL =
  "https://trivalleyhomehealth.com/wp-content/uploads/2025/03/20250328020313-0-Blue-and-Yellow-Group-Anniversary-Instagram-Post-1.png";

async function fetchBuffer(url) {
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function run() {
  const entries = Object.entries(REMOTE_URLS);
  await Promise.all(
    entries.map(async ([file, url]) => {
      const dest = path.join(outDir, file);
      if (fs.existsSync(dest)) return;
      const buf = await fetchBuffer(url);
      fs.writeFileSync(dest, buf);
    })
  );

  // Convert work-slide PNGs to optimized 1200x800 JPEGs
  await Promise.all(
    Object.entries(WORK_SLIDE_URLS).map(async ([file, url]) => {
      const dest = path.join(outDir, file);
      if (fs.existsSync(dest)) return;
      const buf = await fetchBuffer(url);
      await sharp(buf).resize(1200, 800, { fit: "cover" }).jpeg({ quality: 84, mozjpeg: true }).toFile(dest);
    })
  );

  // Resize 25th Anniversary Silver Jubilee emblem
  const badgeDest = path.join(outDir, "anniversary-25-badge.png");
  if (!fs.existsSync(badgeDest)) {
    const bBuf = await fetchBuffer(ANNIVERSARY_BADGE_URL);
    await sharp(bBuf).resize(520, 520, { fit: "inside" }).png({ compressionLevel: 9, palette: true }).toFile(badgeDest);
  }

  // Convert skilled nursing WebP to PNG
  const snDest = path.join(outDir, "service-skilled-nursing.png");
  if (!fs.existsSync(snDest)) {
    const snBuf = await fetchBuffer("https://trivalleyhomehealth.com/wp-content/uploads/2024/11/XXL_height.webp");
    await sharp(snBuf).png().toFile(snDest);
  }

  // Extract standalone icon from logo-full.png
  const iconDest = path.join(outDir, "trivalley-icon.png");
  if (!fs.existsSync(iconDest)) {
    await sharp(path.join(outDir, "logo-full.png"))
      .extract({ left: 20, top: 42, width: 451, height: 220 })
      .png()
      .toFile(iconDest);
  }

  // Crop Jefferson face-to-shoulders portrait
  const jeffDest = path.join(outDir, "team-jefferson.jpg");
  if (!fs.existsSync(jeffDest)) {
    const jBuf = await fetchBuffer("https://trivalleyhomehealth.com/wp-content/uploads/2025/03/20250321222641-0-s.jpg");
    await sharp(jBuf)
      .extract({ left: 256, top: 20, width: 512, height: 512 })
      .resize(600, 600)
      .jpeg({ quality: 90 })
      .toFile(jeffDest);
  }

  // Write mission1.jpeg from embedded base64 WebP
  const mDest = path.join(outDir, "mission1.jpeg");
  if (!fs.existsSync(mDest)) {
    const b64 = fs.readFileSync(path.join(process.cwd(), "scripts", "mission-b64.txt"), "utf8").trim();
    const webpBuf = Buffer.from(b64, "base64");
    await sharp(webpBuf).jpeg({ quality: 88 }).toFile(mDest);
  }

  console.log("All 40 assets ready in", outDir);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
