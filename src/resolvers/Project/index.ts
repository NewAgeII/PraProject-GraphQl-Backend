import { Query } from './Query';
import { Mutation } from './Mutation';
import { Project } from './Project';
import { ProjectManager } from './ProjectManager';
import { MainProject } from './MainProject';
import { Subscription } from './Subscription';
import { MainProjectPhases } from './MainProjectPhases';
import { PhasePayload } from './PhasePayload';
import { PhaseFormsPayload } from './PhaseFormsPayload';

export const ProjectResolver = {Query, Mutation, Subscription, Project, MainProject, ProjectManager, MainProjectPhases, PhasePayload, PhaseFormsPayload}