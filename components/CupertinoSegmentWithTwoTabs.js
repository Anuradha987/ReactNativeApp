import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function CupertinoSegmentWithTwoTabs(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View
        style={[
          styles.textWrapper,
          {
            backgroundColor: props.textWrapper || undefined
          }
        ]}
      >
        <TouchableOpacity style={styles.segmentTextWrapperLeft}>
          <Text style={styles.titleLeft}>{props.titleLeft || "Puppies"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapperRight}>
          <Text style={styles.titleRight}>{props.titleRight || "Cubs"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  textWrapper: {
    height: 29,
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row"
  },
  segmentTextWrapperLeft: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 6,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  titleLeft: {
    fontSize: 13,
    color: "#FFFFFF"
  },
  segmentTextWrapperRight: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 6,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5
  },
  titleRight: {
    fontSize: 13,
    color: "#007AFF"
  }
});

export default CupertinoSegmentWithTwoTabs;
