import React from 'react';
import { Grid, Typography, SvgIcon } from '@mui/material';
import { JavascriptIcon, HtmlIcon, CssIcon, ReactIcon, NodejsIcon, MongodbIcon, ExpressIcon, ReduxIcon, HerokuIcon, GithubIcon } from '@mui/icons-material';

const SkillIcon = ({ skill }) => {
  switch (skill) {
    case 'Javascript':
      return <JavascriptIcon />;
    case 'HTML':
      return <HtmlIcon />;
    case 'CSS':
      return <CssIcon />;
    case 'React':
      return <ReactIcon />;
    case 'Nodejs':
      return <NodejsIcon />;
    case 'MongoDb':
      return <MongodbIcon />;
    case 'Express':
      return <ExpressIcon />;
    case 'Redux':
      return <ReduxIcon />;
    case 'Heroku':
      return <HerokuIcon />;
    case 'Github':
      return <GithubIcon />;
    default:
      return <SvgIcon />;
  }
};

const Sk = ({ skills }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" component="h6">
          Skills
        </Typography>
      </Grid>
      {skills.map((skill) => (
        <Grid item xs={3} key={skill}>
          <SkillIcon skill={skill} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Sk;
