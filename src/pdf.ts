import puppeteer, {type PaperFormat} from "puppeteer";

type Options = {
    port: number;
    format: PaperFormat;
    path: string;
}

async function printPdf(options: Options): Promise<void> {
    const browser = await puppeteer.launch({})
    const page = await browser.newPage()

    await page.goto(`http://localhost:${options.port}/?print-pdf`, {
        waitUntil: 'networkidle2'
    })

    await page.emulateMediaType('print')
    await page.pdf({
        format: options.format,
        path: options.path
    })

    return browser.close()
}

await printPdf({
    port: 4173, // 5173
    format: 'A4',
    path: 'slides.pdf'
})