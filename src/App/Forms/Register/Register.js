import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { InfoPerson } from './InfoPerson';
import './Register.css';

export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = { activeStep: 0 };
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleNext() {
        this.setState({
            activeStep: this.state.activeStep + 1
        });
    };

    handleBack() {
        this.setState({
            activeStep: this.state.activeStep - 1
        });
    }

    handleReset() {
        this.setState({
            activeStep: 0
        });
    }

    steps = this.getSteps();

    getSteps() {
        return ['personal information', 'Educational information', 'Revision'];
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <InfoPerson />;
            case 1:
                return 'What is an ad group anyways?';
            case 2:
                return 'This is the bit I really care about!';
            default:
                return 'Unknown stepIndex';
        }
    }

    render() {
        return (
            <React.Fragment>
                <Grid container component="main" className="root">
                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={7} className="image" />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <div>
                            <Stepper activeStep={this.state.activeStep} alternativeLabel>
                                {this.steps.map(label => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            <div>
                                {this.state.activeStep === this.steps.length ? (
                                    <div>
                                        <Typography>All steps completed</Typography>
                                        <Button onClick={this.handleReset}>Reset</Button>
                                    </div>
                                ) : (
                                    <div>
                                        <Typography className="form">{this.getStepContent(this.state.activeStep)}</Typography>
                                        <div className="buttons">
                                            <Button
                                                disabled={this.state.activeStep === 0}
                                                onClick={this.handleBack}
                                            >
                                                Back
                                            </Button>
                                            <Button variant="contained" color="primary" onClick={this.handleNext}>
                                                {this.state.activeStep === this.steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}