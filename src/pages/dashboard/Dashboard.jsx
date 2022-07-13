import React from 'react';
import { useCollection } from '../../hooks/useCollection';
import ProjectList from '../../components/ProjectList';

//styles
import './Dashboard.css';

function DashBoard() {
  const { documents, error } = useCollection('project');
  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
}

export default DashBoard;
