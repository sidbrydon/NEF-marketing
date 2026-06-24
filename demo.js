// NEF + Devin Live Demo Animation

const demoSteps = [
    {
        id: 'step-task',
        lines: [
            { type: 'info', text: '[Jira] Ticket FEAT-2847 assigned to Devin' },
            { type: 'output', text: '"Add customer SMS notification for payment confirmations"' },
            { type: 'command', prompt: 'devin $', text: 'nef init --template=microservice --lang=java' },
            { type: 'success', text: 'NEF quickstart template cloned successfully' },
            { type: 'output', text: 'Standard structure | Security pre-configured | CI/CD ready' },
        ]
    },
    {
        id: 'step-code',
        lines: [
            { type: 'command', prompt: 'devin $', text: 'git checkout -b feat/sms-notifications' },
            { type: 'info', text: '[Devin] Analysing NEF patterns in codebase...' },
            { type: 'info', text: '[Devin] Writing NotificationService.java' },
            { type: 'info', text: '[Devin] Writing unit tests (87% coverage)' },
            { type: 'success', text: 'Implementation complete. 4 files changed, 247 insertions' },
            { type: 'command', prompt: 'devin $', text: 'git push origin feat/sms-notifications' },
            { type: 'success', text: 'PR #412 created: "Add SMS notification service"' },
        ]
    },
    {
        id: 'step-pipeline',
        lines: [
            { type: 'info', text: '[JTE] Standard pipeline triggered automatically' },
            { type: 'output', text: 'Stage: Build .................... PASSED' },
            { type: 'output', text: 'Stage: Unit Tests ............... PASSED (87% coverage)' },
            { type: 'output', text: 'Stage: Integration Tests ........ PASSED' },
            { type: 'output', text: 'Stage: Security Scan (Snyk) ..... PASSED (0 vulnerabilities)' },
            { type: 'output', text: 'Stage: Code Quality (SonarQube).. PASSED' },
            { type: 'success', text: 'All pipeline stages passed. Ready for deploy.' },
        ]
    },
    {
        id: 'step-infra',
        lines: [
            { type: 'info', text: '[Terraform Enterprise] Infrastructure plan' },
            { type: 'output', text: 'Module: nab-standard-ecs-service v3.2.1' },
            { type: 'output', text: 'Module: nab-standard-rds v2.8.0' },
            { type: 'output', text: 'Module: nab-standard-sns-topic v1.4.2' },
            { type: 'warning', text: 'Plan: 8 to add, 0 to change, 0 to destroy' },
            { type: 'success', text: 'Apply complete! Resources: 8 added.' },
        ]
    },
    {
        id: 'step-comply',
        lines: [
            { type: 'info', text: '[Sentinel] Running policy checks...' },
            { type: 'output', text: 'Policy: encryption-at-rest ......... PASSED' },
            { type: 'output', text: 'Policy: network-segmentation ...... PASSED' },
            { type: 'output', text: 'Policy: data-classification ....... PASSED' },
            { type: 'output', text: 'Policy: audit-logging-enabled ..... PASSED' },
            { type: 'output', text: 'Policy: approved-regions-only ..... PASSED' },
            { type: 'success', text: 'All 12 policies passed. Compliance validated.' },
            { type: 'info', text: '[ServiceNow] Change CHG0089234 auto-approved' },
        ]
    },
    {
        id: 'step-deploy',
        lines: [
            { type: 'info', text: '[Deploy] Rolling deployment to production...' },
            { type: 'output', text: 'Canary: 5% traffic .............. healthy' },
            { type: 'output', text: 'Canary: 25% traffic ............. healthy' },
            { type: 'output', text: 'Canary: 100% traffic ............ healthy' },
            { type: 'success', text: 'Deployment complete. Feature live in production.' },
            { type: 'success', text: 'Audit trail generated. Evidence chain complete.' },
            { type: 'info', text: '[Jira] FEAT-2847 moved to Done. Elapsed: 47 minutes.' },
        ]
    }
];

let demoRunning = false;
let demoTimeout = null;

function startDemo() {
    if (demoRunning) return;
    demoRunning = true;
    
    document.getElementById('demoStartBtn').style.display = 'none';
    document.getElementById('demoResetBtn').style.display = 'inline-block';
    
    const terminal = document.getElementById('terminalBody');
    terminal.innerHTML = '';
    
    runDemoStep(0);
}

function runDemoStep(stepIndex) {
    if (stepIndex >= demoSteps.length) {
        demoRunning = false;
        // Add final success message
        const terminal = document.getElementById('terminalBody');
        const finalLine = document.createElement('div');
        finalLine.className = 'terminal-line';
        finalLine.innerHTML = '<br><span class="success">NEF + Devin: Ticket to production in 47 minutes. Zero manual compliance work.</span>';
        terminal.appendChild(finalLine);
        terminal.scrollTop = terminal.scrollHeight;
        return;
    }
    
    const step = demoSteps[stepIndex];
    const stepEl = document.getElementById(step.id);
    
    // Activate flow step
    document.querySelectorAll('.flow-step').forEach(el => el.classList.remove('active'));
    stepEl.classList.add('active');
    
    const terminal = document.getElementById('terminalBody');
    let lineIndex = 0;
    
    function typeLine() {
        if (lineIndex >= step.lines.length) {
            // Mark step complete
            stepEl.classList.remove('active');
            stepEl.classList.add('complete');
            stepEl.querySelector('.flow-status').textContent = '';
            
            // Move to next step
            demoTimeout = setTimeout(() => runDemoStep(stepIndex + 1), 600);
            return;
        }
        
        const line = step.lines[lineIndex];
        const lineEl = document.createElement('div');
        lineEl.className = 'terminal-line';
        
        if (line.type === 'command') {
            lineEl.innerHTML = `<span class="prompt">${line.prompt}</span> <span class="command">${line.text}</span>`;
        } else if (line.type === 'success') {
            lineEl.innerHTML = `<span class="success">&check; ${line.text}</span>`;
        } else if (line.type === 'info') {
            lineEl.innerHTML = `<span class="info">${line.text}</span>`;
        } else if (line.type === 'warning') {
            lineEl.innerHTML = `<span class="warning">${line.text}</span>`;
        } else {
            lineEl.innerHTML = `<span class="output">${line.text}</span>`;
        }
        
        terminal.appendChild(lineEl);
        terminal.scrollTop = terminal.scrollHeight;
        
        lineIndex++;
        const delay = line.type === 'command' ? 800 : 400 + Math.random() * 300;
        demoTimeout = setTimeout(typeLine, delay);
    }
    
    typeLine();
}

function resetDemo() {
    demoRunning = false;
    if (demoTimeout) clearTimeout(demoTimeout);
    
    document.getElementById('demoStartBtn').style.display = 'inline-block';
    document.getElementById('demoResetBtn').style.display = 'none';
    
    const terminal = document.getElementById('terminalBody');
    terminal.innerHTML = '<div class="terminal-line ready"><span class="prompt">devin $</span> <span class="cursor blink">_</span></div>';
    
    document.querySelectorAll('.flow-step').forEach(el => {
        el.classList.remove('active', 'complete');
        el.querySelector('.flow-status').textContent = '';
    });
}
