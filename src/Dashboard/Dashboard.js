import Card from './Card'


export default function Dashboard() {

    let cardvalues = [
        {
            topic: 'Earnings (Monthly)',
            value: '$40,000',
            classname: 'card border-left-primary shadow h-100 py-2',
            icon: 'fas fa-calendar fa-2x text-gray-300',
            hasprogressbar: false
        },
        {
            topic: 'Earnings (Annual)',
            value: '$215,000',
            classname: 'card border-left-success shadow h-100 py-2',
            icon: 'fas fa-dollar-sign fa-2x text-gray-300',
            hasprogressbar: false
        },
        {
            topic: 'Tasks',
            value: '50%',
            classname: 'card border-left-info shadow h-100 py-2',
            icon: 'fas fa-clipboard-list fa-2x text-gray-300',
            hasprogressbar: true

        },
        {
            topic: 'Pending Requests',
            value: '18',
            classname: 'card border-left-warning shadow h-100 py-2',
            icon: 'fas fa-comments fa-2x text-gray-300',
            hasprogressbar: false
        }

    ]


    return <>
        <div class="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
        </div>
    

            <div className="row">
                {
                    cardvalues.map((obj) => {
                        return <Card data={obj}></Card>
                    })

                }
            </div>
        </>
            }
        
        
