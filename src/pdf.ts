import puppeteer, {type PaperFormat} from "puppeteer"
import {argv} from "node:process"

type Options = {
    port: string | number
    format: PaperFormat
    printable: boolean
    path: string
}

async function printPdf(options: Options): Promise<void> {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(`http://localhost:${options.port}/?print-pdf${options.printable ? "&printable" : ""}`, {
        waitUntil: 'networkidle2'
    })

    await page.emulateMediaType('print')
    await page.pdf({
        format: options.format,
        path: options.path
    })

    return browser.close()
}

async function main(): Promise<void> {

    //  argv[2] => path
    // ?argv[3] => port
    // ?argv[4] => printable

    const options: Options = argv.length <= 2
        ? {
            port: 5173, // 4173
            format: 'A4',
            printable: true,
            path: 'slides.pdf'
        }
        : {
            port: argv.length < 4 ? 5173 : argv[3],
            format: 'A4',
            printable: argv.length < 5 ? false : (/true/i).test(argv[4]),
            path: argv[2]
        }

    await printPdf(options)
}

await main()
