//@ts-check
import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import PerformanceCard from "./PerformanceCard";

const INITIAL_GRID_SIZE = { xl: 4, md: 6, xs: 12 };

function PerformanceCardGridItem({ profile, deleteHandler, setProfileForModal }) {
  const [gridProps, setGridProps] = useState(INITIAL_GRID_SIZE);

  return (
    <Grid item {...gridProps}>
      <PerformanceCard
        id={profile.id}
        name={profile.name}
        updatedAt={profile.updated_at}
        endpoints={profile.endpoints}
        loadGenerators={profile.load_generators}
        testRunDuration={profile.duration}
        handleEdit={() => setProfileForModal(profile)}
        handleDelete={() => deleteHandler(profile.id)}
        handleRunTest={() => setProfileForModal({ ...profile, runTest: true })}
        requestFullSize={() => setGridProps({ xl: 12, md: 12, xs: 12 })}
        requestSizeRestore={() => setGridProps(INITIAL_GRID_SIZE)}
      />
    </Grid>
  );
}

/**
 * PerformanceProfileGrid is the react component for rendering grid
 * @param {{
 *  profiles: Array<{
 *    id: string,
 *    created_at: string,
 *    updated_at: string,
 *    endpoints: Array<string>,
 *    load_generators: Array<string>,
 *    name: string,
 *    user_id: string,
 *    duration: string,
 *  }>,
 *  deleteHandler: (id: string) => void,
 *  setProfileForModal: (profile: any) => void
 * }} props props
 */
function PerformanceProfileGrid({ profiles = [], deleteHandler, setProfileForModal }) {
  return (
    <Grid container spacing={2} style={{ padding: "1rem" }}>
      {profiles.map((profile) => (
        <PerformanceCardGridItem
          key={profile.id}
          profile={profile}
          deleteHandler={deleteHandler}
          setProfileForModal={setProfileForModal}
        />
      ))}
    </Grid>
  );
}

export default PerformanceProfileGrid;