import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

export class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Grid container>
                    <Grid item xs={12}>
                        <h1>Home</h1>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}
