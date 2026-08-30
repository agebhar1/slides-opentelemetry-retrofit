import puppeteer from "puppeteer";

(async function () {

  const browser = await puppeteer.launch({})

  const page = await browser.newPage()

  await page.goto('http://localhost:4173/?print-pdf', {
    waitUntil: 'networkidle2'
  })

  await page.emulateMediaType('print')

  await page.pdf({
    path: 'slides.pdf',
  })

  await browser.close()

})();