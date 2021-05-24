import React from "react";

import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";

import {
  ErrorBoundary,
  Facet,
  SearchProvider,
  SearchBox,
  Results,
  PagingInfo,
  ResultsPerPage,
  Paging,
  Sorting,
  WithSearch,
} from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

import {
  buildAutocompleteQueryConfig,
  buildFacetConfigFromConfig,
  buildSearchOptionsFromConfig,
  buildSortOptionsFromConfig,
  getConfig,
  getFacetFields,
} from "./config/config-helper";

import BodyWrap from "./components/body_wrapper";
import Navbar from "./components/navbar";
import Button from "@material-ui/core/Button";
import ReactTooltip from "react-tooltip";

const { hostIdentifier, searchKey, endpointBase, engineName } = getConfig();

const connector = new AppSearchAPIConnector({
  searchKey,
  engineName,
  hostIdentifier,
  endpointBase,
});

const config = {
  searchQuery: {
    facets: buildFacetConfigFromConfig(),
    ...buildSearchOptionsFromConfig(),
  },
  autocompleteQuery: buildAutocompleteQueryConfig(),
  apiConnector: connector,
  alwaysSearchOnInitialLoad: true,
};

export default function App() {
  return (
    <div>
      <Navbar classes="Login" />
      <SearchProvider config={config}>
        <WithSearch
          mapContextToProps={({ searchTerm, setSearchTerm, results }) => ({
            searchTerm,
            setSearchTerm,
            results,
          })}
        >
          {({ searchTerm, setSearchTerm, results }) => {
            return (
              <div className="search-container">
                <div className="search-bar">
                  <input
                    className=""
                    type="text"
                    placeholder="powered By ELASTICSEARCH"
                    required
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  ></input>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    disableElevation
                    className="searchButton"
                  >
                    <i className="fas fa-search"></i>
                  </Button>
                </div>
                <div className="resultsBody">
                  {results.map((r) => (
                    <div>
                    <div className="resultItem" key={r.id.raw} data-tip data-for='tip'>
                      {r.title.raw}{" "}
                      <Button size="small" variant="outlined" color="secondary">
                        add
                      </Button>{" "}
                      <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        dataTip="React-Tooltip"
                      >
                        View
                      </Button>
                      <ReactTooltip
                      place="right"
                      type="error"
                      effect="solid"
                      id='tip'
                    >
                        
                        </ReactTooltip>
                    </div>
                     
                      </div>
                  ))}
                </div>
              </div>
            );
          }}
        </WithSearch>
      </SearchProvider>
    </div>
  );
}
