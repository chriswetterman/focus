const restrictedSites = [
    'google.com',
    'scratch.mit.edu',
    'youtube.com',
]

const classSchedule = [
    [], // sunday
    [[900, 1230], [1330, 1555]], // monday
    [[900, 1020], [1035, 1145], [1245, 1345], [1400, 1555]], // tuesday
    [[900, 1020], [1035, 1145], [1245, 1345], [1400, 1555]], // wednesday
    [[900, 1020], [1035, 1145], [1245, 1345], [1400, 1555]], // thursday
    [[900, 1020], [1035, 1145], [1245, 1345], [1400, 1555]], // friday
]
const generateCode = () => {

}

const main = () => {
    // See if the loaded site is in the blacklist
    if (restrictedSites.some(site => window.location.hostname.includes(site))) {
        const d = new Date()
        const day = d.getDay()
        const oHours = ((d.getUTCHours() - d.getTimezoneOffset()/60) * 100) + d.getUTCMinutes()
        const todaysSchedule = classSchedule[day]
        const duringClassTime = todaysSchedule.some(block => (oHours >= block[0] && oHours <= block[1]))
        if (duringClassTime) {
            const blockingDiv = document.createElement('div')
            blockingDiv.setAttribute('data-id', 'focus')
            blockingDiv.setAttribute('style', 'position:absolute;top:0;left:0;bottom:0;right:0;background-color:#333;z-index:100000')
            blockingDiv.addEventListener('onkeypress', evt => {
                window.alert(evt)
            })
            const h1 = document.createElement('h1')
            h1.setAttribute('style', 'text-align:center;margin-top:2rem;color:#FFF')
            h1.appendChild(document.createTextNode("It's class time"))
            blockingDiv.appendChild(h1)
            document.body.appendChild(blockingDiv)
        }   
    }
}

main()