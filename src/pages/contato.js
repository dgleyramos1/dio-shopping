import React from 'react';
import { Grid, Button, TextField } from '@material-ui/core/';


const Contatos = () => {
    return (
        <>
            <Grid container direction="row" xs={12}>
                <TextField id="name" label="Name" fullWidth />
                <TextField id="message" label="Message" fullWidth />
            </Grid>
            <Button className="mt-2" variant="conatined" color="primary">
                Sent
            </Button>
            <div className="card mt-2">
                <div className="card-body">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">
                        texto qualquer
                    </p>
                    <p className="card-text">
                        <small className="text-nuted">
                            Last updated 3  mins age
                        </small>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Contatos;