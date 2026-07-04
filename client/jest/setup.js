// Create the root portal element before any tests run
// This is required because the Modal component calls document.getElementById('root') at module load time
const rootPortal = document.createElement('div');
rootPortal.id = 'root';
document.body.appendChild(rootPortal);
