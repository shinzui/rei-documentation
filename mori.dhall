let Schema =
      https://raw.githubusercontent.com/shinzui/mori-schema/3522f4a51181d73c9c90fc27a7c0838bd29ae95f/package.dhall
        sha256:dcb19e2312e790bad14e622cc98a1281cd2298c5b564a2f0d0534d3c718d8803

in  Schema.Project::{
    , project = Schema.ProjectIdentity::{
      , name = "rei-documentation"
      , namespace = "shinzui"
      , stableId = Some "project_01m7086k38e9jtxjfpn2s735j9"
      , type = Schema.PackageType.Other "Documentation"
      , language = Schema.Language.TypeScript
      , lifecycle = Schema.Lifecycle.Active
      , description = Some "Documentation site for the rei CLI"
      , domains = [ "documentation" ]
      , owners = [ "shinzui" ]
      }
    , repos =
      [ Schema.Repo::{
        , name = "rei-documentation"
        , github = Some "shinzui/rei-documentation"
        }
      ]
    , dependencies = [ "shinzui/rei" ]
    , dependencyRefs =
      [ Schema.MoriRef::{ namespace = "shinzui", name = "rei" } ]
    }
