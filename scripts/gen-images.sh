#!/bin/bash
# Mutiara Refleksi - AI image generation batch
OUT=/home/z/my-project/public/images
mkdir -p $OUT/blog

gen() { # name, size, prompt
  local name="$1"; local size="$2"; shift 2
  if [ -f "$OUT/$name.jpg" ]; then echo "skip $name"; return; fi
  z-ai image -p "$*" -o "$OUT/$name.jpg" -s "$size" >/dev/null 2>&1 && echo "OK $name" || echo "FAIL $name"
}

gen hero 1440x720 "Professional photo of a relaxing foot reflexology massage in an elegant Indonesian wellness spa, skilled therapist hands pressing reflex points on a bare foot resting on white towel, soft warm lighting, green plants and white pearl stones decoration, serene luxurious atmosphere, deep emerald green and cream color palette, photorealistic, high quality, wide composition" &
gen service-refleksi-kaki 1344x768 "Close-up professional photo of traditional foot reflexology massage, hands pressing the sole of a foot on a white towel with river stones and orchid flowers nearby, warm spa lighting, emerald green tones, photorealistic, high quality" &
wait
gen service-terapi 1344x768 "Professional photo of therapeutic back massage, therapist pressing upper shoulder muscles of a relaxed client lying on massage bed, calm spa room with soft green tones and warm wood, photorealistic, high quality" &
gen service-wajah 1344x768 "Professional photo of relaxing face and head reflexology massage, therapist gently massaging temples of a woman with closed eyes lying down, spa ambiance with candles and orchids, soft warm light, photorealistic, high quality" &
wait
gen service-aromaterapi 1344x768 "Professional photo of aromatherapy massage scene with essential oil bottles, frangipani flowers and burning candle beside massage bed, green and cream spa towels, tranquil Indonesian spa, photorealistic, high quality" &
gen service-ibu-hamil 1344x768 "Professional photo of gentle prenatal massage for a pregnant woman lying on side supported by pillows, therapist massaging her arm, bright cozy spa room with plants, safe caring atmosphere, photorealistic, high quality" &
wait
gen service-kursi 1344x768 "Professional photo of executive chair massage in a modern shopping mall wellness center, client sitting on ergonomic massage chair while therapist massages neck and shoulders, bright modern interior, photorealistic, high quality" &
gen about-interior 1344x768 "Interior photo of a modern reflexology spa center, row of comfortable massage chairs with deep purple upholstery, warm wooden floor, emerald green wall accents with white pearl decoration, clean bright wellness clinic, photorealistic, high quality" &
wait
gen tim 1344x768 "Professional photo of friendly Indonesian reflexology therapists team in red uniforms standing and smiling in a modern wellness spa, welcoming gesture, bright clean interior, photorealistic, high quality" &
gen og-image 1440x720 "Elegant wellness spa banner with glossy white pearls and green tropical leaves on cream background, luxurious minimalist composition, deep emerald green and crimson red accents, soft studio light, high quality" &
wait
gen blog-sirkulasi 1344x768 "Concept photo of healthy blood circulation, smooth flowing red ribbon through green leaves and water stream, fresh bright wellness concept, photorealistic, high quality" &
gen blog-stres 1344x768 "Photo of a tired office worker feeling deeply relaxed after massage at a peaceful spa, eyes closed breathing calmly, zen stones and green plants, serene mood, photorealistic, high quality" &
wait
gen blog-insomnia 1344x768 "Photo of a person sleeping peacefully in a cozy bedroom at night, soft moonlight, lavender flowers and white pearls on bedside table, tranquil dreamy mood, photorealistic, high quality" &
gen blog-olahraga 1344x768 "Photo of sports massage on athlete calf muscle in bright fitness studio, muscle recovery after exercise, energetic but calm atmosphere, photorealistic, high quality" &
wait
gen blog-harga 1344x768 "Photo of a welcoming reflexology spa reception desk in Jakarta with price list board, comfortable massage chairs in background, friendly clean interior, photorealistic, high quality" &
gen blog-titik-refleksi 1344x768 "Educational photo of a foot reflexology chart with hands pointing to reflex zones on a sole, clean spa background, professional wellness illustration style, photorealistic, high quality" &
wait
ls -la $OUT $OUT/blog
